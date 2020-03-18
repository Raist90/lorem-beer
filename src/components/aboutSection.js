import React from 'react'
import { Link } from 'gatsby'

import './aboutSection.css'

const aboutSection = () => {
    return (
        <div class="container about-preview">
            <div class="row">
                <div class="col-lg-5">
                    <h1>Lorem Ipsum</h1>
                    <p>
                        Voluptate esse velit pariatur proident quis qui pariatur non nostrud pariatur duis nulla sit. Proident eu voluptate ut commodo eiusmod et sunt reprehenderit in duis velit. Reprehenderit ullamco nostrud occaecat culpa nisi velit ut quis ad reprehenderit nisi proident. 
                    </p> 
                    <p>
                        Ad dolore excepteur anim non qui eiusmod. Voluptate amet fugiat incididunt est ullamco non qui labore ad. Tempor reprehenderit cillum quis cillum labore.
                    </p>
                    <Link name="" id="" class="btn btn-primary mb-3" to="#" role="button">Daje, clicca qui</Link>
                </div>

                <div class="col-lg-7">
                    <img src="https://cdn.pixabay.com/photo/2018/10/30/09/09/beer-3783127_960_720.jpg" class="img-fluid" alt="beer"></img>
                </div>
            </div>
        </div>
    )
}

export default aboutSection
