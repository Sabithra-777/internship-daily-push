"use client";

import { useTransition } from "react";
import { submitFeedback } from "../actions/submitFeedback";

export default function FeedbackForm() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await submitFeedback(formData);
      // Keep submitting state for at least 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });
  };

  return (
    <form action={handleSubmit}>
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

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
}
