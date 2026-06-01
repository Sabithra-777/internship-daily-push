import FeedbackForm from './FeedbackForm';
import CustomerReview from './CustomerReview';
import { getAllFeedbacks, getAvgRating } from '../actions/submitFeedback3';

export default async function FeedbackPage() {
    const [feedbacks, avgRating] = await Promise.all([getAllFeedbacks(), getAvgRating()]);
    return (
        <>
            <h1>Product Reviews</h1>
            <FeedbackForm />
            <hr />
            <CustomerReview reviews={feedbacks} avgRating={avgRating} />
        </>
    );
}