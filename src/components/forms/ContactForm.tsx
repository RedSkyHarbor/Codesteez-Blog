import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './ContactForm.module.scss'

type ContactState = {
    captchaPassed?: boolean,
    recaptchaRef?: React.RefObject<ReCAPTCHA>
}

class ContactForm extends Component<{}, ContactState> {
    constructor(props: any) {
        super(props)

        this.state = {
            captchaPassed: false,
            recaptchaRef:  React.createRef<ReCAPTCHA>(),
        }
    }

    sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm((process.env.REACT_APP_EMAILJS_SERVICE_ID as string), (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string), e.target, (process.env.REACT_APP_EMAILJS_USER_ID as string))
            .then((result) => {
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
            <div className='content'>
                <form className={styles.contact_form} onSubmit={this.sendEmail}>
                    <h2>Get in touch</h2>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='user_name' />
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='user_email' />
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' />
                    <div className={ this.state.captchaPassed ? 'hidden' : '' }>
                        <ReCAPTCHA 
                            ref={this.state.recaptchaRef} 
                            onChange={this.captchaSuccess} 
                            sitekey={(process.env.REACT_APP_RECAPTCHA_SITE_KEY as string)}
                        />
                    </div>
                    <input className={ this.state.captchaPassed ? '' : 'hidden' }  type='submit' value='Send' />
                </form>
            </div>
        );
    }
}

export default ContactForm