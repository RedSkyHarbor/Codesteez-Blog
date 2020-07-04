import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const NotFoundPage = () => {
    return (
        <div>
            <Helmet><title>404 | Code Steez</title></Helmet>
            <Header />
            <div>Not found</div>
            <Footer />
        </div>
    )
}

export default NotFoundPage