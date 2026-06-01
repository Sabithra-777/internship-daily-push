'use server'
import pool from '../lib/db'
import { revalidatePath } from 'next/cache';

async function submitFeedbackForm3(formData:FormData){
    console.log("feedback form: ", formData);

    // extract username, email, feedback
    const username = formData.get("username");
    const email = formData.get("email");
    const feedback_msg = formData.get("feedback");
    const rating = Number(formData.get("rating"));

    await pool.query(
        'INSERT INTO feedbacks(username, email, feedback_msg, rating) VALUES ($1, $2, $3, $4)',
        [username, email, feedback_msg, rating]
    );
    console.log("data save");
    // revalidate the path
    revalidatePath('/feedback');

}

export async function getAllFeedbacks(){
    const data = await pool.query('SELECT * FROM feedbacks ORDER BY id DESC');
    return data.rows;
}

export async function getAvgRating(){
    const result = await pool.query('SELECT ROUND(AVG(rating)::numeric, 1) AS avg_rating FROM feedbacks');
    return result.rows[0].avg_rating;
}

export default submitFeedbackForm3;