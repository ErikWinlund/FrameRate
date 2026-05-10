import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

type Review = {
  _id: string;
  username: string;
  rating: number;
  reviewText: string;
};

function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`http://localhost:5000/api/movies/${id}`);
      const data = await res.json();
      setMovie(data);
    };

    const fetchReviews = async () => {
      const res = await fetch(`http://localhost:5000/reviews/${id}`);
      const data = await res.json();
      setReviews(data);
    };

    fetchMovie();
    fetchReviews();
  }, [id]);

  return (
    <div className="bg-[#051424] min-h-screen text-white">
      <Navbar />

      <div className="p-10 flex gap-10">
        {movie && (
          <>
            <img
              className="w-80 rounded"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />

            <div>
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="mt-4">{movie.overview}</p>
              <p className="mt-2 text-gray-400">
                Release: {movie.release_date}
              </p>

              <button
                onClick={() => navigate(`/movies/${id}/review`)}
                className="mt-6 bg-red-600 px-4 py-2 rounded"
              >
                Create Review
              </button>
            </div>
          </>
        )}
      </div>

      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>

        {reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          reviews.map((r) => (
            <div key={r._id} className="bg-[#122131] p-4 rounded mb-3">
              <p className="font-bold">{r.username}</p>
              <p>Rating: {r.rating}/10</p>
              <p>{r.reviewText}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MovieDetailsPage;
