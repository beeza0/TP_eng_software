import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignUp.css'


const SignUp = props => {
    const [userData, setUserData] = useState({})

    return (
        <div>
            <h1>OLA MUNDO</h1>
            <input placeholder="Local para escrita do nome" onChange={(e) => {setUserData({...userData , name : e.target.value})}} value={setUserData.name}></input>
            <div className="teste"></div>
        </div>


    )
}

export default SignUp