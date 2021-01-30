import React, { useState, useContext } from 'react'
import axios from 'axios'
import './navebar.css'
import './bootstrap.css'

//import bike_logo from '../assets/bike_logo.png'


function Home(props) {
    const [userData, setUserData] = useState({})

    return (<>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top coloor">
            <div className="container-fluid">
                <a className="navebar-brand">
                    <h3 id="name">Bike Rent Online</h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Bike</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rent</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        

    </>)

}

export default Home