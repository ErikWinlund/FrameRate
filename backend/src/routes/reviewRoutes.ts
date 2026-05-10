import express from "express";
import reviewController from "../controllers/reviewController";
import { jwtMiddleware } from "../middleware/jwtMiddleware";

const router = express.Router();

router.post("/", jwtMiddleware.jwtTokenIsValid, (req, res) => {
  reviewController.createReview(req, res);
});

router.get("/me", jwtMiddleware.jwtTokenIsValid, (req, res) => {
  reviewController.getUserReviews(req, res);
});

router.get("/:movieId", (req, res) => {
  reviewController.getMovieReviews(req, res);
});

export default router;
