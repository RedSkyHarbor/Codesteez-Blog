import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './ContactForm.module.scss'

type ContactState = {
    captchaPassed?: boolean,
    recaptchaRef?: React.RefObject<ReCAPTCHA>,
    emailSent?: boolean,
}

type ContactProps = {}

class ContactForm extends Component<ContactProps, ContactState> {
    state = {
        captchaPassed: false,
        recaptchaRef:  React.createRef<ReCAPTCHA>(),
        emailSent: false,
    }

    sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm((process.env.REACT_APP_EMAILJS_SERVICE_ID as string), (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string), e.target, (process.env.REACT_APP_EMAILJS_USER_ID as string))
            .then((result) => {
                this.setState({ emailSent: true })
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    captchaSuccess = () => {
        this.setState({ captchaPassed: true })
    }

    render() {
        return (
            <form className={styles.contact_form} onSubmit={this.sendEmail}>
                <p>Get in touch</p>
                <input type='text' name='user_name' placeholder=' Name' required />
                <input type='email' name='user_email' placeholder=' Email' required />
                <textarea  name='message' placeholder=' Message' required />
                <div className={ this.state.captchaPassed ? 'hidden' : '' }>
                    <ReCAPTCHA 
                        size='compact'
                        ref={this.state.recaptchaRef} 
                        onChange={this.captchaSuccess} 
                        sitekey={(process.env.REACT_APP_RECAPTCHA_SITE_KEY as string)}
                    />
                </div>
                <input className={ this.state.captchaPassed ? '' : 'hidden' }  type='submit' value='Send' />
                <div className={ this.state.emailSent ? '' : 'hidden'}>
                    Email sent. Expect a reply within the next 5 business days.
                </div>
            </form>
        );
    }
}

export default ContactForm