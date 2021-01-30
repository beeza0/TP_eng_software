import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignIn.css'
import { useHistory } from 'react-router-dom'

const SignIn = props => {
    const history = useHistory()
    const [userData, setUserData] = useState({})
    const submitSignIn = () => {
        axios.post('http://localhost:3001/login', userData)
            .then(res =>{
                if(res.data === 300){
                    console.log("senha errada")
                }
                else if(res.data === 400){
                    console.log("cpf não registrado")
                }
                else{
                    document.cookie = `cpf=${res.data.cpf};`
                    history.push({
                        pathname: '/bikes'
                        // state: { payment: paymentOptions }
                    })
                    history.go()
                    
                }
            })
            .catch(err =>{
                console.log("cpf não registrado")
            })
    }
    return (
        <div>
            <div className= "container">
                <div className ="midle-align">
                    <div class="muck-up">
                    <div class="overlay"></div>
                        <div class="content">
                            <div class="logo">
                                <a href="#" alt="Home" ><span class="fa fa-map-marker"></span></a> {/*Referência para home*/}

                            </div>
                            <div class="header">
                                {/*<p className="home"><span>Home</span></p>*/}
                                <hr></hr>
                                <h4><span>BRO</span></h4>
                                <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                            </div>
                            <div class="login">
                                <h2 className="btn sign-in">SingIn</h2>
                                <div  className="fomr_signin">
                                    <div class="form-group">
                                        <label for="cpf">CPF:</label>
                                        <input	type="cpf"	className="campos" idName="cpf"	name="cpf" placeholder="000.000.000-00"
                                        onChange={(s) => {setUserData({...userData , cpf : s.target.value})}} value={userData.cpf}></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="senha">Senha:</label>
                                        <input	type="password"	className="campos" idName="senha"	name="senha" placeholder="Digite sua senha"
                                        onChange={(e) => {setUserData({...userData , password : e.target.value})}} value={userData.password}></input>
                                    </div>
                                    <div class="form-group">
                                        <button className="btn sign-in button" idName="senha"	name="Entrar" onClick={submitSignIn} >Entrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default SignIn