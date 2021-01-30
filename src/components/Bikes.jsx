import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import './Bikes.css'
import './bootstrap.css'
import BikesCards from './BikesCards.jsx'


const Bikes = props => {

    const [bikes, setBikes] = useState()
 //   console.log(document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1])
    useEffect(() => {
        axios.get('http://localhost:3001/getAllBikes')
            .then(res => {
                setBikes(res.data)
            })
    }, [])

    const renderCards = () => 
        bikes.map(bike => {
            return (
                <BikesCards bikeData={bike}/>
            )
        })
    

    return (
        <div className="bikes-cards">
            {bikes && renderCards()}
            {}
        </div>
  )
}
export default Bikes