import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignIn.css'

const SignIn = props => {
    //const [userData, setUserData] = useState({})
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
                                <form action="#" method="post" className="fomr_signin">
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input	type="email"	className="campos" idName="email"	name="email" placeholder="email@exemplo.com"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="senha">Senha:</label>
                                        <input	type="password"	className="campos" idName="senha"	name="senha" placeholder="Digite sua senha"></input>
                                    </div>
                                    <div class="form-group">
                                        <button	type="submit" className="btn sign-in button" idName="senha"	name="Entrar" >Entrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default SignIn