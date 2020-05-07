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
            <form className={styles.contact_form} onSubmit={sendEmail}>
                <h2>Get in touch</h2>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='user_name' />
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='user_email' />
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' />
                <input type='submit' value='Send' />
            </form>
        </div>
    );
}
