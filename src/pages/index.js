import React from 'react'
import Menu from '../components/menu'
import Banner from '../components/banner'
import AboutSection from '../components/aboutSection'
import { Helmet } from 'react-helmet'

import '../components/custom.css'

const indexPage = () => {
    return (
            <div>
                <Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin&display=swap" rel="stylesheet"></link>
                    <html lang="it"></html>
                </Helmet>
                <Menu />
                <Banner />
                <AboutSection />
            </div>
    )
}

export default indexPage;
