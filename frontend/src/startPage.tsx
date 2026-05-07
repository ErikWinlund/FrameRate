import Navbar from "./NavBar";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

function StartPage() {
  const { user } = useAuth();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/movies/popular");
        const data = await res.json();
        setMovies(data.results as Movie[]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#051424]">
        <main className="w-300 mx-auto">
          <div className="flex">
            <div>
              <h1 className="text-[#D4E4FA] text-[48px] font-semibold">
                Review Collection
              </h1>

              <h3 className="text-[#E5BDBE] font-extralight">
                Your curated digital theater. Manage your thoughts, ratings, and
                cinematic journey.
              </h3>
            </div>
            {user && (
              <button className=" flex items-center gap-2 mt-5 ml-auto w-50 justify-center h-fit bg-[#E11D48] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
                <img src="addReview.png" alt="+" />
                Add Review
              </button>
            )}
          </div>

          <div className="w-300 h-20 flex justifiy-center margin mt-5">
            <button className=" mt-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
              All Movies
            </button>
            {user && (
              <>
                <button className=" mt-5 ml-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
                  Watched
                </button>
                <button className=" mt-5 ml-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
                  Want to Watch
                </button>
              </>
            )}
          </div>

          <div className="mt-15">
            <h2 className="text-[#D4E4FA] text-[30px] font-semibold">
              Trending Movies
            </h2>
          </div>

          <section className="grid grid-cols-3 gap-10 mt-4 mb-20">
            {movies.map((movie, index) => (
              <div
                key={movie.id || index}
                className="w-90 h-90 bg-[#122131] text-[#D4E4FA] p-2"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-70 object-cover rounded"
                />

                <p className="mt-2 text-sm font-semibold">{movie.title}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default StartPage;
