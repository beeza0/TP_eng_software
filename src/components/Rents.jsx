import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import './Rents.css'
import Nav from './navebar.jsx'
import RentsCards from './RentsCards.jsx'


const Rents = props => {

    const [rents, setRents] = useState()
    const userCpf = document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1]

    useEffect(() => {
        console.log(userCpf);
        axios.post('http://localhost:3001/getAllRentsByCpf', {cpf: userCpf})
            .then(res => {
                setRents(res.data)
                console.log(res.data)
            })
    }, [])

    const renderCards = () => 
        rents.map(rent => {
            return (
                <RentsCards rentData={rent}/>
            )
        })
    

    return (
    <Fragment>
        <Nav/>
        <div className="rents-cards">
            {rents && renderCards()}
        </div>
    </Fragment>
  )
}
export default Rents