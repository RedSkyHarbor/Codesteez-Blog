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
                    <input type='text' name='user_name' placeholder=' Name' />
                    <input type='email' name='user_email' placeholder=' Email'/>
                    <textarea  name='message' placeholder=' Message'/>
                    <div className={ this.state.captchaPassed ? 'hidden' : '' }>
                        <ReCAPTCHA 
                            size='compact'
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