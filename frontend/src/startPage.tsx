import React from "react";
import Navbar from "./NavBar";

function StartPage() {
  const movies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
    { id: 3, title: "The Dark Knight" },
    { id: 4, title: "Parasite" },
    { id: 5, title: "The Matrix" },
  ];

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
            <button className=" flex items-center gap-2 mt-5 ml-auto w-50 justify-center h-fit bg-[#E11D48] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
              <img src="addReview.png" alt="+" />
              Add Review
            </button>
          </div>

          <div className="w-300 h-20 flex justifiy-center margin mt-5">
            <button className=" mt-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
              All Movies
            </button>
            <button className=" mt-5 ml-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
              Watched
            </button>
            <button className=" mt-5 ml-5 w-30 h-fit bg-[#1C2B3C] text-white font-semibold py-4 rounded-lg hover:bg-[#be123c] transition tracking-widest text-sm cursor-pointer">
              Want to Watch
            </button>
          </div>

          <section className="grid grid-cols-3 gap-y-4 gap-x-10 self-center mt-20 overflow-y-auto mb-20">
            {movies.map((movie, index) => (
              <div className="w-90 h-90 bg-[#122131] " key={movie.id || index}>
                {movie.title}
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default StartPage;
