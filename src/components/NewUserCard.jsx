import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import './BikesCards.css'
import './bootstrap.css'


const NewUserCard = props => {

    const [bikeData, setBikeData] = useState({name: null, cpf: null, password: null})

    const createBike = () => {
        axios.post('http://localhost:3001/signup', bikeData)
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
            marginTop: '50px',
            marginLeft: '180px',
            marginRight: '180px',
        }
    }))

    const classes = useStyles()

    return (
        <Paper className={classes.mainPaper}>
            <div  className="card mb-3 bike-card">
                <div className="card-body-new">
                    <label className="new-bike-label">Register a new user:</label>
                    <div className="create-bike-inputs">
                        <dt>CPF:</dt>
                        <input className="new-input" placeholder="CPF..." value={bikeData.cpf} onChange={(e) => setBikeData({...bikeData, cpf: e.target.value})}/>
                    </div>
                    <div className="create-bike-inputs">
                        <dt>Name:</dt>
                        <input className="new-input" placeholder="name..." value={bikeData.userName} onChange={(e) => setBikeData({...bikeData, userName: e.target.value})}/>
                    </div>
                    <div className="create-bike-inputs">
                        <dt>Password:</dt>
                        <input className="new-input" placeholder="password..." value={bikeData.password} onChange={(e) => setBikeData({...bikeData, password: e.target.value})}/>
                    </div>
                <div style={{marginTop: '25px', marginBottom: '36px'}}>
                        <button className="btn btn-primary" style={{fontSize: '1.5em'}} onClick = {() => {createBike()}}>Register</button>
                    </div>                
                </div>
            </div>
        </Paper>
        )
    }
export default NewUserCard