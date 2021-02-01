import React, { useState } from 'react'
import axios from 'axios'
import './SignIn.css'
import { useHistory } from 'react-router-dom'

const SignIn = props => {
    const history = useHistory()
    const [userData, setUserData] = useState({})
    const [noCpf, setNoCpf] = useState(false)
    const [noPassword, setNoPassword] = useState(false)

    const submitSignIn = () => {
        setNoPassword(false)
        setNoCpf(false)
        axios.post('http://localhost:3001/login', userData)
            .then(res =>{
                if(res.data === 300){
                    setNoPassword(true)
                    console.log("1")
                }
                else if(res.data === 400){
                    setNoCpf(true)
                    console.log("2")

                }
                else{
                    console.log("3")
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
                setNoCpf(true)
            })
    }
    return (
        <div class="muck-up">
            <div class="overlay"></div>
            <div class="content">
                <div class="logo">
                    <a href="/" alt="Home" ><span class="fa fa-map-marker"></span></a> {/*Referência para home*/}
                </div>
                <div class="header">
                    {/*<p className="home"><span>Home</span></p>*/}
                    <br/>
                    <h4><span>BRO</span></h4>
                    <p><span>B</span>ike <span>R</span>ent <span>O</span>nline</p>
                </div>
                {noPassword && <div className="alert-v" style={{display: 'flex', justifyContent: 'center'}}> <h2>Wrong password!</h2> </div>}
                {noCpf && <div className="alert-v" style={{display: 'flex', justifyContent: 'center'}}> <h2>CPF not registered!</h2> </div>}
                <div class="login">
                    <div  className="fomr_signin">
                        <div class="form-group">
                            <label for="cpf">CPF:</label>
                            <input	type="cpf"	className="campos" idName="cpf"	name="cpf" placeholder="CPF..."
                            onChange={(s) => {setUserData({...userData , cpf : s.target.value})}} value={userData.cpf}></input>
                        </div>
                        <div class="form-group">
                            <label for="senha">Password:</label>
                            <input	type="password"	className="campos" idName="senha"	name="senha" placeholder="password..."
                            onChange={(e) => {setUserData({...userData , password : e.target.value})}} value={userData.password}></input>
                        </div>
                        <div class="form-group-v" style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                            <button className="button-v" onClick={submitSignIn} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn