import React, { useState, useContext } from 'react'
import axios from 'axios'
import './Home.css'
//import bike_logo from '../assets/bike_logo.png'


const Home = props => {
    const [userData, setUserData] = useState({})

    return (

      <div className="muck-up">
        <div className="overlay" />
        <div className="content">
          <div className="logo">
            <a href="#"><span className="fa fa-map-marker" ></span></a>
          </div>
          <div className="header">
            <hr />
            <h4><span>BRO</span></h4>
            <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
          </div>
          <div className="login">
            <a className="btn sign-in" href="#">Sign In</a>
            <a className="btn sign-up" href="#">Sign Up</a>
            <a className="btn connect-fb" href="#"><i className="ion-social-facebook" />Connect With<span>Facebook</span></a>
            <a className="btn connect-tw" href="#"><i className="ion-social-twitter-outline" />Connect With<span>Twitter</span></a>
          </div>
        </div>
      </div> 
  )
}
//<img src={bike_logo} alt=""/>
export default Home