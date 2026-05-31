// "use server";
// import path from "path";
// import process from "process";
// import fs from "fs/promises";

// async function submitContactForm(formData: FormData) {
//   // console.log("formData: ", formData);

//   // lets define the file path
//   // cwd - current working directory
//   const name = formData.get("fullName");
//   const userEmail = formData.get("email");
//   const userMessage = formData.get("message");
//   const obj = {
//     fullName: name,
//     email: userEmail,
//     message: userMessage,
//   };
//   console.log("obj: ", obj);
//   const filePath = path.join(process.cwd(), "app", "data", "users.json");

//   // read the file
//   const fileData = await fs.readFile(filePath, "utf-8");

//   console.log("fileData: ", fileData);

//   // lets convert the file data to JS object
//   const data = await JSON.parse(fileData);
//   data.push(obj);
//   console.log("Parsed Data: ", data);

//   fs.writeFile(filePath, JSON.stringify(data, null, 2));
//   console.log("Data saved successfully");
// }
// export default submitContactForm;

// //  Blog: fetching static data with dynamic routes
// // Porfolio site : Multipage porfolio site (having diff sections )
// // ToDo list
// // server action: Users post feedback with instant UI updates

'use server'
import pool from '../lib/db';
import { revalidatePath } from 'next/cache';

async function submitContactForm(formData: FormData) {
    const name = String(formData.get('fullName') ?? '');
    const userEmail = String(formData.get('email') ?? '');
    const userMessage = String(formData.get('message') ?? '');

    await pool.query(
        'INSERT INTO users (fullname, email, message) VALUES ($1, $2, $3)',
        [name, userEmail, userMessage]
    );
    revalidatePath('/contact');
}

export async function getDetails() {
    const result = await pool.query('SELECT * FROM users ORDER BY id DESC');
    return result.rows;
}

export default submitContactForm;

//  Blog: fetching static data with dynamic routes
// Porfolio site : Multipage porfolio site (having diff sections )
// ToDo list
// server action: Users post feedback with instant UI updates

// 1. Create a feedback form
// 2. details should be immediately displayed on the UI
// 3. Save the feedback data to some file using server action