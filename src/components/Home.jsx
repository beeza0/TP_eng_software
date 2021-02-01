import React, { useState, useContext } from 'react'
import axios from 'axios'
import './Home.css'
//import bike_logo from '../assets/bike_logo.png'


const Home = props => {

    return (

      <div className="muck-up" style={{marginTop: '7em'}}>
        <div className="overlay" />
        <div className="content">
          <div className="logo">
            <a href="/"><span className="fa fa-map-marker" ></span></a>
          </div>
          <div className="header">
            <br/>
            <h4><span>BRO</span></h4>
            <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
          </div>
          <div className="login" style={{display: 'flex', flexDirection: 'column'}}>
            <a className="btn sign-in" href="/signin">Sign In</a>
            <a className="btn sign-up" href="/signup">Sign Up</a>
          </div>
        </div>
      </div> 
  )
}
//<img src={bike_logo} alt=""/>
export default Home