import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header/Header'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'

const AboutPage = () => {
    return (
        <div>
            <Helmet><title>About | Code Steez</title></Helmet>
            <Header />
            <About />
            <Footer />
        </div>
    )

}

export default AboutPage