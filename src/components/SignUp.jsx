import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignUp.css'
import './Tamplate.css'
import './Logo.css'
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
                            <p>Sign Up to <span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                        </div>
                    </div>
                        
                    <div className="cadastro-v">
                        <div class="form-entry">
                                <label for="text">Name:</label>
                                <input	type="text"className="campos" placeholder="Type your name"
                                onChange={(s) => {setUserData({...userData , userName : s.target.value})}} value={userData.userName}></input>
                        </div>
                        <div class="form-entry">
                                <label for="text">CPF:</label>
                                <input	type="text"	className="campos" placeholder="Type your CPF"
                                onChange={(s) => {setUserData({...userData , cpf : s.target.value}); setCpfAlert(false)}} value={userData.cpf}></input>
                        </div>
                        <div class="form-entry">
                                <label for="password">Password:</label>
                                <input	type="password"	className="campos" placeholder="password..."
                                onChange={(s) => {setUserData({...userData , password : s.target.value}); setCpfAlert(false)}} value={userData.password}></input>
                        </div>
                        <div class="form-entry">
                                <label for="password">Confirm password:</label>
                                <input	type="password"	className="campos" placeholder="password..."
                                onChange={(s) => {setConfirmPassword(s.target.value); setDifPasswordAlert(false)}} value={confirmPassword}></input>
                        </div>
                        <div class="form-entry">
                                <button className="btn sign-up-v" idName="senha"	name="Entrar" onClick={submitSignUp} >Sign Up</button>
                        </div>
                        {difPasswordAlert && <div className="alert-v"> <h2>As senhas não conferem, tente outra vez</h2> </div>}
                        {cfpAlert && <div className="alert-v"> <h2>O CPF já está cadastrado</h2> </div>}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp