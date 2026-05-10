import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./NavBar";

function CreateReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const submitReview = async () => {
    try {
      await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          movieId: Number(id),
          rating,
          reviewText,
        }),
      });

      navigate(`/movies/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#051424] text-white">
      <Navbar />

      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create Review</h1>

        <div className="mb-4">
          <label className="block mb-2">Rating (1–10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-3 bg-[#122131] rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-3 bg-[#122131] rounded h-40"
          />
        </div>

        <button onClick={submitReview} className="bg-red-600 px-6 py-3 rounded">
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default CreateReviewPage;
