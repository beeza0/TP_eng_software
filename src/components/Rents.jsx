import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import './Rents.css'
import Nav from './navebar.jsx'
import RentsCards from './RentsCards.jsx'
import NewRentCard from './NewRentCard.jsx'


const Rents = props => {

    const [rents, setRents] = useState(null)
    const userCpf = document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1]
    const isAdmin = (document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1] == 0) ? true : false

    useEffect(() => {
        if(isAdmin){
            axios.get('http://localhost:3001/getAllRents')
            .then(res => {
                setRents(res.data)
            }) 
        }
        else {
           axios.post('http://localhost:3001/getAllRentsByCpf', {cpf: userCpf})
            .then(res => {
                setRents(res.data)
            }) 
        }
        
    }, [])

    const renderCards = () => 
        rents.map(rent => {
            return (
                <RentsCards rentData={rent} isAdmin={isAdmin}/>
            )
        })
    

    return (
    <Fragment>
        <Nav/>
        <div className="rents-cards">
            {isAdmin && <NewRentCard/>}
            {rents && renderCards()}
        </div>
    </Fragment>
  )
}
export default Rents