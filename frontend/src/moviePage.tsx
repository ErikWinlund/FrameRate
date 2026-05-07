import Navbar from "./NavBar";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

function MoviePage() {
  const { user } = useAuth();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(5);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/movies?page=${page}`,
        );
        const data = await res.json();
        setMovies(data.results as Movie[]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(search.toLowerCase()),
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-[#051424]">
        <main className="w-300 mx-auto mt-5">
          <div className="flex">
            <div className="mt-6">
              <h1 className="text-[#D4E4FA] text-[48px] font-semibold">
                All Movies
              </h1>

              <h3 className="text-[#E5BDBE] font-extralight"></h3>
            </div>
            {user && (
              <button className=" flex items-center gap-2 mt-5 ml-auto w-50 justify-center h-fit bg-[#E11D48] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
                <img src="addReview.png" alt="+" />
                Add Review
              </button>
            )}
          </div>

          <div className="w-300 h-20 flex  margin mt-5">
            {user && (
              <>
                <button className=" mt-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
                  Watched
                </button>
                <button className=" mt-5 ml-5 w-35 h-13 bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
                  Want to Watch
                </button>
              </>
            )}

            <input
              type="'text'"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-5 ml-155 w-70 p-4 rounded-lg bg-[#1C2B3C] text-white outline-none"
            />
          </div>

          <section className="grid grid-cols-3 gap-10 mt-4 mb-20">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
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

export default MoviePage;
