import React, { useState, useContext } from 'react'
import axios from 'axios'
import './SignUp.css'



const SignUp = props => {
    const [userData, setUserData] = useState({})
    const [confirmPassword, setConfirmPassword] = useState()
    const [difPasswordAlert, setDifPasswordAlert] = useState(false);
    const [cfpAlert, setCpfAlert] = useState(false);

    const submitSignUp = async () => {

        const hasCpf = (await axios.post('http://localhost:3001/getUserByCpf', {cpf: userData.cpf})).data
        console.log(hasCpf)

        if (userData.password === confirmPassword && hasCpf === null){
            //console.log(userData)
            setDifPasswordAlert(false)
            axios.post('http://localhost:3001/signup', userData)
                .then(res => {
                    console.log(res)
                })
        }

        
        else if (hasCpf != null) {
            setCpfAlert(true)
        }

        else {
            setDifPasswordAlert(true)
           // console.log(difPassword)
        }
    }

    return (
        <div>
            <div className="muck-up-v">
                <div className="overlay-v"></div>
                <div className="content-v">
                    <div className="logo-v">
                    <a href="#"><span class="fa fa-map-marker"></span></a>
                    </div>
                <div className="header-v">
                    
                    <h4><span>BRO</span></h4>
                    <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                    
                </div>
                <div className="cadastro-v">
                    <h1>Sign Up to <span>B</span>ike <span>R</span>ent <span>O</span>nline</h1>
                    
                    <p>Nome:</p>
                    <input placeholder="Digite seu nome" onChange={(e) => {setUserData({...userData , userName : e.target.value})}} value={setUserData.userName}></input>
                    <p>CPF:</p>
                    <input placeholder="Digite seu CPF" onChange={(e) => {setUserData({...userData , cpf : e.target.value});
                     setCpfAlert(false)}}
                      value={setUserData.cpf}></input>
                    {/*<p>E-mail:</p>
                    <input placeholder="email@example.com" onChange={(e) => {setUserData({...userData , email : e.target.value})}} value={setUserData.email}></input>*/}
                    <p>Senha:</p>
                    <input placeholder="Digite sua senha" onChange={(e) => {setUserData({...userData , password : e.target.value})}} value={setUserData.password}></input>
                    <p>Confirme sua senha:</p>
                    <input placeholder="Digite sua senha" onChange={(e) => {setConfirmPassword(e.target.value);
                    setDifPasswordAlert(false)}}
                     value={confirmPassword}></input>


                    <h2></h2>
                    <button className="btn-v sign-up-v" onClick={submitSignUp}>Sign Up</button>
                    {difPasswordAlert && <div className="alert-v"> <h2>As senhas não conferem, tente outra vez</h2> </div>}
                    {cfpAlert && <div className="alert-v"> <h2>O CPF já está cadastrado</h2> </div>}
                </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp