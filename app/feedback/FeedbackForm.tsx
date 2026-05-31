'use client'
import { useFormStatus } from 'react-dom';
import submitFeedbackForm from '../actions/submitFeedback';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit Feedback'}
        </button>
    );
}

export default function FeedbackForm() {
    return (
        <form action={submitFeedbackForm}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" placeholder="Enter your username" />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <br /><br />

            <label htmlFor="feedback">Feedback: </label>
            <textarea name="feedback" id="feedback" placeholder="Write your feedback" rows={4} cols={40}></textarea>
            <br /><br />

            <SubmitButton />
        </form>
    );
}
