import React, { useState, useContext } from 'react'
import axios from 'axios'
import './Home.css'
import './Tamplate.css'
import './Logo.css'

const Home = props => {
    const [userData, setUserData] = useState({})

    return (
      <div className="muck-up">
        <div className="overlay" />
        <div className="content">
          <div className="logo">
            <div className="logo-icone">
              <a href="#"><span className="fa fa-map-marker" ></span></a>
            </div>
            <div className="logo-header">
              <hr />
              <h4>BRO</h4>
              <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
            </div>
          </div>
          <div className="selections">
            <a className="btn-home sign-in" href="#">Sign In</a>
            <a className="btn-home sign-up" href="#">Sign Up</a>
            <a className="btn connect-fb" href="#"><i className="ion-social-facebook" />Connect With<span>Facebook</span></a>
            <a className="btn connect-tw" href="#"><i className="ion-social-twitter-outline" />Connect With<span>Twitter</span></a>
          </div>
        </div>
      </div> 
  )
}

export default Home