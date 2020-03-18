import React from 'react'
import { Link } from 'gatsby'

import './banner.css'

const Banner = () => {
    return (
        <div class="banner beer parallax">
            <div class="caption white-bg">
                <h1 class="m-title">Lorem Ipsum</h1>
                <p class="lead">Laboris dolore anim occaecat anim enim labore est ad.</p>
                <Link name="" id="" class="btn btn-primary" to="#" role="button">Se sei figo clicca qui</Link>
            </div>
        </div>   
    )
}

export default Banner;