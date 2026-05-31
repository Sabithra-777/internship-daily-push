// // Feedback page with a form
// import FeedbackForm from "./FeedbackForm";
// import { getALLFeedbacks } from "../actions/submitFeedback";

// type FeedbackItem = {
//   name?: string;
//   email?: string;
//   rating?: string;
//   comments?: string;
//   submittedAt?: string;
// };

// export default async function FeedbackPage() {
//   const feedbacks = await getALLFeedbacks();

//   return (
//     <>
//       <h1>Feedback</h1>

//       <FeedbackForm />

//       <section style={{ marginTop: "2rem" }}>
//         <h2>Previous Feedback</h2>
//         {feedbacks.length === 0 ? (
//           <p>No feedback yet.</p>
//         ) : (
//           <ul>
//             {feedbacks.map((item: FeedbackItem, index: number) => (
//               <li key={index}>
//                 <strong>{item.name || "Anonymous"}</strong> (
//                 {item.email || "no email"})
//                 <br />
//                 Rating: {item.rating}
//                 <br />
//                 {item.comments}
//                 <br />
//                 <small>Submitted at: {item.submittedAt}</small>
//               </li>
//             ))}
//           </ul>
//         )}
//       </section>
//     </>
//   );
// }

import { getAllFeedbacks } from '../actions/submitFeedback';
import FeedbackForm from './FeedbackForm';

export default async function FeedbackPage() {
    const feedbacks = await getAllFeedbacks();
    return (
        <>
            <h1>User Feedback Form</h1>
            <FeedbackForm />
            <hr />
            {
                feedbacks.map((feedback: any, index: number) => (
                    <div key={index}>
                        <h2>{feedback.username}</h2>
                        <h3>{feedback.email}</h3>
                        <p>{feedback.feedback}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    );
}