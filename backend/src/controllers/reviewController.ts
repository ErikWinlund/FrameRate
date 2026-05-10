import { Request, Response } from "express";
import reviewModel from "../models/reviewModel";

class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      const jwt = res.locals.jwt;

      const { movieId, rating, reviewText } = req.body;

      const review = await reviewModel.create({
        movieId,
        rating,
        reviewText,

        userId: jwt.userId,
        username: jwt.username,
      });

      return res.status(201).json(review);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Could not create review",
      });
    }
  }

  async getMovieReviews(req: Request, res: Response) {
    try {
      const movieId = Number(req.params.movieId);

      const reviews = await reviewModel.find({
        movieId,
      });

      return res.status(200).json(reviews);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Could not fetch reviews",
      });
    }
  }
}

export default new ReviewController();
