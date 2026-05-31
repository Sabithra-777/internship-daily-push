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

// define the server action for feedback form
import submitFeedbackForm, { getAllFeedbacks } from "../actions/submitFeedback";
import SubmitButton from "../components/SubmitButton";

async function FeedbackForm(){
    const feedbacks = await getAllFeedbacks();
    console.log("feedbacks ", feedbacks);
    return (
        <>
        <h1>User Feedback Form</h1>
        <form action={submitFeedbackForm}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" 
            placeholder="Enter your username" />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" 
            placeholder="Enter your email" />
            <br /><br />

            <label htmlFor="feedback">Feedback: </label>
            <textarea name="feedback" id="feedback" 
            placeholder="Write your feedback" 
            rows={4} cols={40}>
            </textarea>
            <br /><br />

            <SubmitButton/>

        </form>
        <hr />
        {
            feedbacks.map((feedback:any, index:number) => (
                <div key={index}>
                    <h1>{feedback.username}</h1>
                    <h3>{feedback.email}</h3>
                    <p>{feedback.message}</p>
                    <hr />
                </div>
            ))
        }
        </>
    )
}
export default FeedbackForm;