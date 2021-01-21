import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignUp.css'


const SignUp = props => {
    const [userData, setUserData] = useState({})

    return (
        <div>
            <div className="muck-up">
                <div className="overlay"></div>
                <div className="content">
                    <div className="logo">
                    <a href="#"><span class="fa fa-map-marker"></span></a>
                    </div>
                <div className="header">
                    
                    <h4><span>BRO</span></h4>
                    <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                    
                </div>
                <div className="cadastro">
                    <h1>Sign Up to <span>B</span>ike <span>R</span>ent <span>O</span>nline</h1>
                    
                    <p>Nome:</p>
                    <input placeholder="Digite seu nome" onChange={(e) => {setUserData({...userData , nome : e.target.value})}} value={setUserData.nome}></input>
                    <p>CPF:</p>
                    <input placeholder="Digite seu CPF" onChange={(e) => {setUserData({...userData , cpf : e.target.value})}} value={setUserData.cpf}></input>
                    <p>E-mail:</p>
                    <input placeholder="email@example.com" onChange={(e) => {setUserData({...userData , email : e.target.value})}} value={setUserData.email}></input>
                    <p>Senha:</p>
                    <input placeholder="Digite sua senha" onChange={(e) => {setUserData({...userData , password : e.target.value})}} value={setUserData.password}></input>
                    <p>Confirme sua senha:</p>
                    <input placeholder="Digite sua senha" onChange={(e) => {setUserData({...userData , password_conf : e.target.value})}} value={setUserData.password_conf}></input>


                    <h2></h2>
                    <a className="btn sign-up" href="#">Sign Up</a>
                </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp