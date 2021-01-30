import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import './Bikes.css'
import BikesCards from './BikesCards.jsx'
import Nav from './navebar.jsx'


const Bikes = props => {

    const [bikes, setBikes] = useState()
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
        <Fragment>
            <Nav/>
            <div className="bikes-cards">
                {bikes && renderCards()}
            </div>
        </Fragment>
  )
}
export default Bikes