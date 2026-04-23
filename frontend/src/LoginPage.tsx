import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
      credentials: "include",
    });

    if (res.ok) {
      console.log("You made it");
      navigate("/home");
    }
  };

  return (
    <div className="h-screen w-screen relative flex justify-center items-center bg-black ">
      <img
        src="./loginBackground.png"
        alt="bakgrundsbilden"
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
      />
      <main className="w-120 h-150  rounded-2xl flex justify-around items-center flex-col z-10 relative">
        <div className="flex gap-2 items-center">
          <img src="./logoLogin.png" alt="loginLogo" className="w-9 h-7" />
          <h1 className="text-[#E11D48] text-[48px] font-extrabold tracking-tighter leading-10 ">
            FrameRate
          </h1>
        </div>
        <h3 className="text-[#E5BDBE]/70 text-[16px] font-semibold">
          DIGITAL TEATHER ACCESS
        </h3>

        <section className="bg-[#122131]/70 w-full h-110  p-6 rounded-2xl  border-white shadow-2xl">
          <label
            htmlFor="email"
            className="text-[#E5BDBE]/70 text-sm font-semibold"
          >
            Email Address
          </label>

          <div className="mt-2 flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:border-[#E11D48] transition">
            <span className="mr-2 flex items-center">
              <img
                src="./logoEmail.png"
                alt="logoEmail"
                className="w-6 h-4 opacity-70"
              />
            </span>

            <input
              className="bg-transparent outline-none text-white placeholder:text-white/40 w-full"
              type="text"
              name="email"
              id="email"
              placeholder="johndoe@framerate.com"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-[#E5BDBE]/70 text-sm font-semibold"
              >
                Password
              </label>
            </div>

            <div className="mt-2 flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:border-[#E11D48] transition gap-2">
              <span>
                <img
                  className="w-5 h-5 opacity-60"
                  src="./logoPassword.png"
                  alt="logoPassword"
                />
              </span>

              <input
                className="bg-transparent outline-none text-white placeholder:text-white/40 w-full"
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />

              <span className="ml-2 flex items-center">
                <img
                  src="./logoEyePassword.png"
                  alt="logoEyePassword"
                  className="w-6 h-3 opacity-60"
                />
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 accent-[#5C3F40] cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-sm text-[#E5BDBE]/60 cursor-pointer font-semibold "
            >
              Remember this device
            </label>
          </div>

          <button
            className="mt-8 w-full bg-[#E11D48] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer"
            onClick={() => login(email, password)}
          >
            Login to Libary
          </button>
        </section>
        <h3 className="text-[#E5BDBE] font-semibold text-sm">
          Don't have an account?
          <Link className="text-[#E11D48] font-semibold" to="/register">
            Register for FrameRate
          </Link>
        </h3>
      </main>
    </div>
  );
}

export default LoginPage;
