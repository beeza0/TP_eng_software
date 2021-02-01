import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignIn.css'
import './Tamplate.css'
import './Logo.css'
import { useHistory } from 'react-router-dom'

const SignIn = props => {
    const history = useHistory()
    const [userData, setUserData] = useState({})
    const [wrongPasswordAlert, setWrongPasswordAlert] = useState(false);
    const [cfpNotHasAlert, setcfpNotHasAlert] = useState(false)
    const submitSignIn = () => {
        axios.post('http://localhost:3001/login', userData)
            .then(res =>{
                if(res.data === 300){
                    setWrongPasswordAlert(true);
                }
                else if(res.data === 400){
                    setcfpNotHasAlert(true);
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
        <div className="muck-up">
            <div className="overlay"></div>
            <div className="content">
                <div className="logo">
                    <div className="logo-icone">
                        <a href="#"><span className="fa fa-map-marker" ></span></a>
                    </div>
                    <div className="logo-header">
                        <hr />
                        <h4>BRO</h4>
                        <p>Sign In to <span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                    </div>
                </div>
                <div class="login">
                    <div class="form-entry">
                        <label for="cpf">CPF:</label>
                        <input	type="cpf"	className="campos" idName="cpf"	name="cpf" placeholder="000.000.000-00"
                        onChange={(s) => {setUserData({...userData , cpf : s.target.value})}} value={userData.cpf}></input>
                    </div>

                    <div class="form-entry">
                        <label for="senha">Senha:</label>
                        <input	type="password"	className="campos" idName="senha"	name="senha" placeholder="Digite sua senha"
                        onChange={(e) => {setUserData({...userData , password : e.target.value})}} value={userData.password}></input>
                    </div>
                    <div class="form-entry">
                        <button className="btn sign-in-m" idName="senha"	name="Entrar" onClick={submitSignIn} >Entrar</button>
                    </div>
                    {wrongPasswordAlert && <div className="alert-sign-in"> <h2>The password is wrong!</h2> </div>}
                    {cfpNotHasAlert && <div className="alert-sign-in"> <h2>The CPF has not registered!</h2> </div>}
                </div>
            </div>
        </div>
    )
}

export default SignIn