'use client'
import { useFormStatus } from 'react-dom';
import submitFeedbackForm3 from '../actions/submitFeedback3';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit Review'}
        </button>
    );
}

export default function FeedbackForm() {
    return (
        <form action={submitFeedbackForm3}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" placeholder="Enter your username" required />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Enter your email" required />
            <br /><br />

            <label htmlFor="feedback">Feedback: </label>
            <textarea name="feedback" id="feedback" placeholder="Write your feedback" rows={4} cols={40}></textarea>
            <br /><br />

            <label htmlFor="rating">Rating: </label>
            <select name="rating" id="rating" required>
                <option value="">-- Select --</option>
                {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{'⭐'.repeat(n)} ({n}/5)</option>
                ))}
            </select>
            <br /><br />

            <SubmitButton />
        </form>
    );
}
