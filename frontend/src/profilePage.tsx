import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:5000/reviews/me", {
          credentials: "include",
        });

        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (user) {
      fetchReviews();
    }
  }, [user]);

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center bg-[#051424]">
        <main className="w-300 mx-auto mt-5">
          <div className="flex items-center">
            <div className="mt-6">
              <h1 className="text-[#D4E4FA] text-[48px] font-semibold">
                My Profile
              </h1>

              <h3 className="text-[#E5BDBE] font-extralight mt-2">
                Your movie statistics and account info
              </h3>
            </div>

            <button className="ml-auto mt-5 w-40 h-fit bg-[#E11D48] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
              Edit Profile
            </button>
          </div>

          {user && (
            <>
              <section className="mt-10 bg-[#122131] rounded-xl p-10 flex items-center gap-10">
                <div className="w-35 h-35 rounded-full bg-[#1C2B3C] flex items-center justify-center text-5xl text-white font-bold"></div>

                <div>
                  <h2 className="text-[#D4E4FA] text-4xl font-semibold">
                    {user.username}
                  </h2>

                  <p className="text-[#E5BDBE] mt-2 text-lg">{user.email}</p>

                  <div className="mt-5 inline-block bg-[#1C2B3C] px-5 py-3 rounded-lg text-white">
                    Favorite Genre: {user.favoriteGenre}
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-8 mt-10">
                <div className="bg-[#122131] p-8 rounded-xl">
                  <h3 className="text-[#E5BDBE] text-lg">Movies Watched</h3>

                  <p className="text-[#D4E4FA] text-5xl font-bold mt-4">0</p>
                </div>

                <div className="bg-[#122131] p-8 rounded-xl">
                  <h3 className="text-[#E5BDBE] text-lg">Reviews</h3>

                  <p className="text-[#D4E4FA] text-5xl font-bold mt-4">
                    {reviews.length}
                  </p>
                </div>

                <div className="bg-[#122131] p-8 rounded-xl">
                  <h3 className="text-[#E5BDBE] text-lg">Watchlist</h3>

                  <p className="text-[#D4E4FA] text-5xl font-bold mt-4">0</p>
                </div>
              </section>

              <section className="mt-10 mb-20">
                <h2 className="text-[#D4E4FA] text-3xl font-semibold mb-5">
                  Recent Activity
                </h2>

                <div className="bg-[#122131] rounded-xl p-8 text-[#E5BDBE]">
                  No recent activity yet.
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
