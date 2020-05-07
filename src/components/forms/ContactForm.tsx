import React from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.scss'

export default function ContactForm() {

    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm((process.env.REACT_APP_EMAILJS_SERVICE_ID as string), (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string), e.target, (process.env.REACT_APP_EMAILJS_USER_ID as string))
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='content'>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}
