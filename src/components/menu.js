import React from 'react'
import { Link } from 'gatsby'

import './menu.css'

const Menu = () => {
    return (
        <div container-fluid>
            <nav class="m-menu">
                <ul class="m-menu-ul">
                    <li class="m-menu-link"><Link to="#">Logo</Link></li>
                    <li class="m-menu-link"><Link to="#">Home</Link></li>
                    <li class="m-menu-link"><Link to="/chi-siamo">Chi Siamo</Link></li>
                    <li class="m-menu-link"><Link to="/contatti">Contatti</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
