"use server";
import path from "path";
import process from "process";
import fs from "fs/promises";

async function submitContactForm(formData: FormData) {
  // console.log("formData: ", formData);

  // lets define the file path
  // cwd - current working directory
  const name = formData.get("fullName");
  const userEmail = formData.get("email");
  const userMessage = formData.get("message");
  const obj = {
    fullName: name,
    email: userEmail,
    message: userMessage,
  };
  console.log("obj: ", obj);
  const filePath = path.join(process.cwd(), "app", "data", "users.json");

  // read the file
  const fileData = await fs.readFile(filePath, "utf-8");

  console.log("fileData: ", fileData);

  // lets convert the file data to JS object
  const data = await JSON.parse(fileData);
  data.push(obj);
  console.log("Parsed Data: ", data);

  fs.writeFile(filePath, JSON.stringify(data, null, 2));
  console.log("Data saved successfully");
}
export default submitContactForm;

//  Blog: fetching static data with dynamic routes
// Porfolio site : Multipage porfolio site (having diff sections )
// ToDo list
// server action: Users post feedback with instant UI updates
