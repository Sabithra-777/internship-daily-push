type Review = {
    id: number;
    username: string;
    email: string;
    rating: number;
    feedback: string;
};

export default function CustomerReview({ reviews }: { reviews: Review[] }) {
    if (reviews.length === 0) return <p>No reviews yet.</p>;

    return (
        <section>
            <h2>Customer Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <p><strong>{review.username}</strong> — <span style={{ color: '#888' }}>{review.email}</span></p>
                    <p>{'⭐'.repeat(review.rating)} ({review.rating}/5)</p>
                    <p>{review.feedback}</p>
                </div>
            ))}
        </section>
    );
}
