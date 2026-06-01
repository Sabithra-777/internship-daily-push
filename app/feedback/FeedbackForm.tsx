'use client'
import { useFormStatus } from 'react-dom';
import submitFeedbackForm from '../actions/submitFeedback';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit Review'}
        </button>
    );
}

export default function FeedbackForm({ avgRating }: { avgRating?: number }) {
    return (
        <form action={submitFeedbackForm}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" placeholder="Enter your username" required />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Enter your email" required />
            <br /><br />

            <label htmlFor="rating">Rating (1–5): </label>
            <select name="rating" id="rating" required>
                <option value="">-- Select --</option>
                {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{'⭐'.repeat(n)} ({n})</option>
                ))}
            </select>
            <br /><br />

            <label htmlFor="feedback">Feedback: </label>
            <textarea name="feedback" id="feedback" placeholder="Write your feedback" rows={4} cols={40}></textarea>
            <br /><br />

            {avgRating !== undefined && (
                <p>⭐ Average Rating: <strong>{avgRating} / 5</strong></p>
            )}

            <SubmitButton />
        </form>
    );
}
