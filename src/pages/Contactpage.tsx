import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header/Header'
import ContactForm from '../components/forms/ContactForm'
import Footer from '../components/footer/Footer'

const ContactPage = () => {
    return (
        <div>
            <Helmet><title>Contact | Code Steez</title></Helmet>
            <Header />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default ContactPage