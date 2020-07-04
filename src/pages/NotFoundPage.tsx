import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header/Header'
import NotFound from '../components/404/NotFound'
import Footer from '../components/footer/Footer'

const NotFoundPage = () => {
    return (
        <div>
            <Helmet><title>404 | Code Steez</title></Helmet>
            <Header />
            <NotFound />
            <Footer />
        </div>
    )
}

export default NotFoundPage