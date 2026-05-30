"use server";
import path from "path";
const process = require("process");
import fs from "fs/promises";

async function submitFeedback(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const rating = formData.get("rating");
  const comments = formData.get("comments");

  const entry = {
    name,
    email,
    rating,
    comments,
    submittedAt: new Date().toISOString(),
  };

  const filePath = path.join(process.cwd(), "app", "data", "feedback.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData || "[]");
  data.push(entry);

  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  console.log("Feedback saved");
}

export default submitFeedback;
