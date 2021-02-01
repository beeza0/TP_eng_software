import React from 'react'
import './navebar.css'
import './bootstrap.css'
import { useHistory } from 'react-router-dom'


function Nav(props) {

    const history = useHistory()
    const isAdmin = (document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1] == 0) ? true : false

    const logout = () => {
        document.cookie = 'cpf=null'
        history.push({
            pathname: '/signin'
            // state: { payment: paymentOptions }
        })
        history.go()
    }

    return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top coloor" style={{height: '100px', position: 'fixed', width: '100%'}}>
            <div className="container-fluid">
                <a className="navebar-brand">
                    <h3 id="name">Bike Rent Online</h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/bikes" id="nav-link-style">Bikes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/rents" id="nav-link-style">Rents</a>
                        </li>
                        {/* <li className="nav-item">
                            {isAdmin ? 
                            <a className="nav-link" href="/about" id="nav-link-style">Users</a>
                            : 
                            <a className="nav-link" href="/about" id="nav-link-style">About us</a>
                            }
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" onClick={logout} id="nav-link-style">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        

    </>
    )

}

export default Nav