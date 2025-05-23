import { model, Schema } from 'mongoose';

import { TReview } from './review.interface';

const reviewSchema = new Schema<TReview>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Review = model<TReview>('Review', reviewSchema);
