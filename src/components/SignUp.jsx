import React, { useState } from 'react'
import axios from 'axios'
import './SignUp.css'
import { useHistory } from 'react-router-dom'


const SignUp = props => {
    const [userData, setUserData] = useState({})
    const [confirmPassword, setConfirmPassword] = useState()
    const [difPasswordAlert, setDifPasswordAlert] = useState(false);
    const [cfpAlert, setCpfAlert] = useState(false)
    const history = useHistory()

    const submitSignUp = async () => {

        const hasCpf = (await axios.post('http://localhost:3001/getUserByCpf', {cpf: userData.cpf})).data

        if (userData.password === confirmPassword && hasCpf === null){
            setDifPasswordAlert(false)
            axios.post('http://localhost:3001/signup', userData)
                .then(res => {
                    history.push({
                        pathname: '/signin'
                        // state: { payment: paymentOptions }
                    })
                    history.go()
                })
        }

        
        else if (hasCpf != null) {
            setCpfAlert(true)
        }

        else {
            setDifPasswordAlert(true)
        }
    }

    return (
        <div>
            <div className="muck-up-v">
                <div className="overlay-v"></div>
                <div className="content-v">
                    <div className="logo-v">
                    <a href="/"><span class="fa fa-map-marker"></span></a>
                    </div>
                <div className="header-v">
                    
                    <h4><span>BRO</span></h4>
                    <p>Sign Up to <span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                    
                </div>
                <div className="cadastro-v">
                    <div className="two-inputs">
                    <div class="form-group-v">
                            <label for="text">Name:</label>
                            <input	type="text"className="campos" placeholder="Type your name"
                            onChange={(s) => {setUserData({...userData , userName : s.target.value})}} value={userData.userName} style={{textAlign: 'left'}}></input>
                    </div>
                    <div class="form-group-v">
                            <label for="text">CPF:</label>
                            <input	type="text"	className="campos" placeholder="Type your CPF"
                            onChange={(s) => {setUserData({...userData , cpf : s.target.value}); setCpfAlert(false)}} value={userData.cpf} style={{textAlign: 'left'}}></input>
                    </div>
                    </div>
                    <div className="two-inputs">
                    <div class="form-group-v">
                            <label for="password">Password:</label>
                            <input	type="password"	className="campos" placeholder="password..."
                            onChange={(s) => {setUserData({...userData , password : s.target.value}); setCpfAlert(false)}} value={userData.password} style={{textAlign: 'left'}}></input>
                    </div>
                    <div class="form-group-v">
                            <label for="password">Confirm password:</label>
                            <input	type="password"	className="campos" placeholder="password..."
                            onChange={(s) => {setConfirmPassword(s.target.value); setDifPasswordAlert(false)}} value={confirmPassword} style={{textAlign: 'left'}}></input>
                    </div>
                    </div>
                    <div class="form-group-v">
                            <button className="button-v" idName="senha"	name="Entrar" onClick={submitSignUp} >SIGN UP</button>
                    </div>
                    {difPasswordAlert && <div className="alert-v"> <h2>The passwords doesn't match!</h2> </div>}
                    {cfpAlert && <div className="alert-v"> <h2>CPF already registered!</h2> </div>}
                </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp