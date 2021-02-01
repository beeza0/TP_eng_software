import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import './BikesCards.css'
import './bootstrap.css'


const NewBikeCard = props => {

    const [bikeData, setBikeData] = useState({id: null, imgUrl: null, price: null})

    const createBike = () => {
        axios.post('http://localhost:3001/createBike', bikeData)
                .then(res => {
                    window.location.reload()
                })
    }

    const useStyles = makeStyles((theme) => ({
        mainPaper: {
            width: '600px',
            height: 'fit-content',
            padding: '1vw',
            borderRadius: '25px',
            backgroundColor: 'rgb(255, 255, 255)',
            marginTop: '50px'
        }
    }))

    const classes = useStyles()

    return (
        <Paper className={classes.mainPaper}>
            <div  className="card mb-3 bike-card">
                <div className="card-body-new">
                    <label className="new-bike-label">Register a new bike:</label>
                    <div className="create-bike-inputs">
                        <dt>Bike ID</dt>
                        <input className="new-input" placeholder="ID..." value={bikeData.id} onChange={(e) => setBikeData({...bikeData, id: e.target.value})}/>
                    </div>
                    <div className="create-bike-inputs">
                        <dt>Price</dt>
                        <input className="new-input" placeholder="price..." value={bikeData.price} onChange={(e) => setBikeData({...bikeData, price: e.target.value})}/>
                    </div>
                    <div className="create-bike-inputs">
                        <dt>Image</dt>
                        <input className="new-input" placeholder="image..." value={bikeData.imgUrl} onChange={(e) => setBikeData({...bikeData, imgUrl: e.target.value})}/>
                    </div>
                <div style={{marginTop: '25px', marginBottom: '36px'}}>
                        <button className="btn btn-primary" style={{fontSize: '1.5em'}} onClick = {() => {createBike()}}>Register</button>
                    </div>                
                </div>
            </div>
        </Paper>
        )
    }
export default NewBikeCard