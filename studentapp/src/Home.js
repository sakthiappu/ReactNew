import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import imghome from './imghome.jpeg'
import image001 from './image001.png'

function Home() {
    const menuItems = [
        { key: "crud", "displayName": "CRUD", isDefaut: true },
        { key: "login", "displayName": "LOGIN", isDefaut: false },
        { key: "rxjs/cart", "displayName": "RXJS", isDefaut: false }
    ];

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    {/* <marquee width="30%" direction="up" height="60px"> */}
                    <img src={image001}></img>
                         {/* </marquee> */}
                    <div id="navbarResponsive">
                        <ul className="navbar-nav">
                            {menuItems.map((menu, i) =>
                                <li className='nav-item mx-0 mx-lg-1' key={i}>
                                    <Link to={'/' + menu.key} className='li' style={{ color: 'white' }}>{menu.displayName}</Link>
                                </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div><img src={imghome}width='1200px' height='600px'></img></div>
            </div>

    )
}
export default Home;