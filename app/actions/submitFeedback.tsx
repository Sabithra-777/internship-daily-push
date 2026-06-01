// "use server";
// import path from "path";
// import process from "process";
// import fs from "fs/promises";

// export async function submitFeedback(formData: FormData) {
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const rating = formData.get("rating");
//   const comments = formData.get("comments");

//   const entry = {
//     name,
//     email,
//     rating,
//     comments,
//     submittedAt: new Date().toISOString(),
//   };

//   const filePath = path.join(process.cwd(), "app", "data", "feedback.json");
//   const fileData = await fs.readFile(filePath, "utf-8");
//   const data = JSON.parse(fileData || "[]");
//   data.push(entry);

//   await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//   console.log("Feedback saved");
// }

// export async function getALLFeedbacks() {
//   const filePath = path.join(process.cwd(), "app", "data", "feedback.json");
//   const rawData = await fs.readFile(filePath, "utf-8");
//   const fileData = rawData ? JSON.parse(rawData) : [];
//   return fileData;
// }

'use server'
import pool from '../lib/db';
import { revalidatePath } from 'next/cache';

async function submitFeedbackForm(formData: FormData) {
    const username = String(formData.get('username') ?? '');
    const email = String(formData.get('email') ?? '');
    const feedback = String(formData.get('feedback') ?? '');
    const rating = Number(formData.get('rating') ?? 0);

    await pool.query(
        'INSERT INTO feedbacks (username, email, feedback, rating) VALUES ($1, $2, $3, $4)',
        [username, email, feedback, rating]
    );
    revalidatePath('/feedback');
}

export async function getAllFeedbacks() {
    const result = await pool.query('SELECT * FROM feedbacks ORDER BY id DESC');
    return result.rows;
}

export async function getAvgRating() {
    const result = await pool.query('SELECT ROUND(AVG(rating)::numeric, 1) AS avg_rating FROM feedbacks');
    return result.rows[0].avg_rating;
}

export default submitFeedbackForm;

// const [optimisticState, addOptimistic] =
// useOptimistic(state, (actualState, newValue) => {
//     return [...actualState, nw]
// })