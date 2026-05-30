// Feedback page with a form
"use client";
import submitFeedback from "../actions/submitFeedback";

function FeedbackForm() {
  return (
    <>
      <h1>Feedback</h1>
      <form action={submitFeedback}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name" />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@example.com"
        />
        <br />
        <br />

        <label htmlFor="rating">Rating (1-5)</label>
        <input type="number" name="rating" id="rating" min={1} max={5} />
        <br />
        <br />

        <label htmlFor="comments">Comments</label>
        <textarea name="comments" id="comments" rows={4} cols={40}></textarea>
        <br />
        <br />

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
}

export default FeedbackForm;
