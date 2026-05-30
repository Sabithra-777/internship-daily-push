// define the contactPage route
'use client'
import submitContactForm from "../actions/submitContactForm";
function ContactForm(){
    return (
        <>
        <h1>Contact Form</h1>
        <form action={submitContactForm}>
            <label htmlFor="fullName">FullName</label>
            <input type="text" name="fullName" id="fullName"
            placeholder="Enter your full name" />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" 
            placeholder="email" /> <br /><br />

            <textarea name="message" id="message"
            rows={4} cols={40}></textarea>

            <br /><br />
            <button type="submit">Send Message</button>
        </form>
        </>
    )
}

export default ContactForm;