import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function signupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [favoriteGenre, setFavoriteGenre] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const signup = async (
    username: string,
    email: string,
    password: string,
    favoriteGenre: string,
  ) => {
    const res = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        favoriteGenre: favoriteGenre,
      }),
      credentials: "include",
    });

    if (res.ok) {
      console.log("You have created a account");
    }

    if (!res.ok) {
      setError("All fields required");
    }
  };

  return (
    <div className="h-screen w-screen relative flex justify-center items-center bg-black ">
      <img
        src="./signupBackground.png"
        alt="bakgrundsbilden"
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
      />
      <main className="w-120 h-200  rounded-2xl flex justify-around items-center flex-col z-10 relative">
        <section className="bg-[#122131]/70 w-full h-160  p-6 rounded-2xl  border-white shadow-2xl flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <img src="./logoLogin.png" alt="loginLogo" className="w-9 h-7" />
            <h1 className="text-[#E11D48] text-[28px] font-extrabold tracking-tighter leading-10">
              FrameRate
            </h1>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="text-[#E5BDBE]/70 text-sm font-semibold tracking-tighter leading-10">
              Join the digital theater experience.
            </h1>
          </div>

          <div className="mt-8 w-full">
            <div className="flex justify-between items-center">
              <label
                htmlFor="username"
                className="text-[#E5BDBE]/70 text-sm font-semibold"
              >
                USERNAME
              </label>
            </div>

            <div className="mt-2 flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:border-[#E11D48] transition gap-2">
              <span>
                <img
                  className="w-5 h-5 opacity-60"
                  src="./logoUser.png"
                  alt="logoUser"
                />
              </span>

              <input
                className="bg-transparent outline-none text-white placeholder:text-white/40 w-full"
                type="text"
                name="username"
                id="username"
                placeholder="John_doe_1337"
                value={username}
                onChange={(e) => {
                  setUsername(e.currentTarget.value);
                }}
              />
            </div>
          </div>

          <label
            htmlFor="email"
            className="text-[#E5BDBE]/70 text-sm font-semibold w-full mt-8"
          >
            EMAIL ADDRESS
          </label>

          <div className="mt-2 flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:border-[#E11D48] transition w-full">
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

          <div className="mt-8 w-full">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-[#E5BDBE]/70 text-sm font-semibold"
              >
                PASSWORD
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

          <div className="mt-8 w-full">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-[#E5BDBE]/70 text-sm font-semibold"
              >
                FAVORITE GENRE
              </label>
            </div>

            <div className="mt-2 flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:border-[#E11D48] transition gap-2">
              <span>
                <img
                  className="w-6 h-4 opacity-60"
                  src="./logoGenre.png"
                  alt="logoGenre"
                />
              </span>

              <select
                className="w-full  text-white"
                value={favoriteGenre}
                onChange={(e) => {
                  setFavoriteGenre(e.currentTarget.value);
                }}
              >
                <option value="" disabled selected>
                  Choose Genre
                </option>
                <option value="action" className="text-black">
                  Action
                </option>
                <option value="adventure" className="text-black">
                  Adventure
                </option>
                <option value="animation" className="text-black">
                  Animation
                </option>
                <option value="comedy" className="text-black">
                  Comedy
                </option>
                <option value="crime" className="text-black">
                  Crime
                </option>
                <option value="documentary" className="text-black">
                  Documentary
                </option>
                <option value="drama" className="text-black">
                  Drama
                </option>
                <option value="family" className="text-black">
                  Family
                </option>
                <option value="fantasy" className="text-black">
                  Fantasy
                </option>
                <option value="film-noir" className="text-black">
                  Film Noir
                </option>
                <option value="history" className="text-black">
                  History
                </option>
                <option value="horror" className="text-black">
                  Horror
                </option>
                <option value="music" className="text-black">
                  Music
                </option>
                <option value="musical" className="text-black">
                  Musical
                </option>
                <option value="mystery" className="text-black">
                  Mystery
                </option>
                <option value="romance" className="text-black">
                  Romance
                </option>
                <option value="sci-fi" className="text-black">
                  Sci-Fi
                </option>
                <option value="sport" className="text-black">
                  Sport
                </option>
                <option value="thriller" className="text-black">
                  Thriller
                </option>
                <option value="war" className="text-black">
                  War
                </option>
                <option value="western" className="text-black">
                  Western
                </option>
              </select>
            </div>
            {error && (
              <span className="text-[#E11D48] font-semibold text-sm">
                {error}
              </span>
            )}
          </div>

          <button
            className="mt-8 w-full bg-[#E11D48] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer"
            onClick={() => signup(username, email, password, favoriteGenre)}
          >
            Create Account
          </button>
        </section>
        <h3 className="text-[#E5BDBE] font-semibold text-sm">
          Already have a collection?{" "}
          <Link className="text-[#E11D48] font-semibold" to="/login">
            Sign in
          </Link>{" "}
        </h3>
      </main>
    </div>
  );
}

export default signupPage;
