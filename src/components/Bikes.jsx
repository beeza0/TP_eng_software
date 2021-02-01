import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import './Bikes.css'
import './bootstrap.css'
import BikesCards from './BikesCards.jsx'
import NewBikeCard from './NewBikeCard.jsx'
import Nav from './navebar.jsx'


const Bikes = props => {
    const [bikes, setBikes] = useState()
    const isAdmin = (document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1] == 0) ? true : false
    const userCpf = document.cookie.split(';').filter(item => item.includes('cpf'))[0].split('cpf=')[1]
    const [showPopUp, setShowPopUp] = useState(false)
    const [rents, setRents] =useState()

    useEffect(() => {
        axios.get('http://localhost:3001/getAllBikes')
            .then(res => {
                setBikes(res.data)
            })
        axios.post('http://localhost:3001/getAllRentsByCpf', {cpf: userCpf})
        .then(async res => {
            let aux = []
            await res.data.map(rent => {
                aux.push(rent.id)
                if(aux.length == res.data.length){
                    setRents(aux)
                }
            })
        })
    }, [showPopUp])

    
    const newRent = (bike) => {
        axios.post('http://localhost:3001/createRent', {
            cpf: userCpf,
            id: bike.id,
            price: bike.price,
            imgUrl: bike.imgUrl
        })
        .then(_ => {setShowPopUp(true)})
    }


    const renderCards = () => 
        bikes.map(bike => {
            return (
                <BikesCards bikeData={bike} newRent={newRent} rents={rents} isAdmin={isAdmin}/>
            )
        })
    

    return (
        <Fragment>
            <Nav/>
            {showPopUp && <div className = "pop-up-container">
                <div className = "pop-up">
                    <div className = "pop-up-text">
                        <label>Bike rented!</label>
                        <i className = "fas fa check"></i>
                    </div>
                    <button onClick = {() => setShowPopUp(false)}>X</button>
                </div>
            </div>}
            <div className="bikes-cards">
                {isAdmin && <NewBikeCard/>}
                {bikes && renderCards()}
            </div>
        </Fragment>
  )
}
export default Bikes