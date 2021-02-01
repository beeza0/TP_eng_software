import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import './BikesCards.css'
import './bootstrap.css'
import axios from 'axios'
//import bike_logo from '../assets/bike_logo.png'


const UsersCards = props => {
    const {bikeData, newRent, rents, isAdmin} = props
    const [hasRented, setHasRented] = useState()

    const deleteBike = () => {
        axios.delete(`http://localhost:3001/deleteUser/${bikeData.cpf}`)
                .then(res => {
                    window.location.reload()
                })
    }

    useEffect(() => {
        if (rents) {
            rents.forEach(id => {
                if(id == bikeData.id) setHasRented(true)
            })  
        }
    }, [rents])

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
            <div className="card-body">
                <dl>
                    <div className="info1">
                        <dt>CPF:</dt>
                        <dd>{bikeData.cpf}</dd>
                    </div>
                    <div className="info2">
                        <dt>Name:</dt>
                        <dd>{bikeData.userName}</dd>
                    </div> 
                </dl>
                {/* <div className="button">
                    <div className="btn btn-primary" onClick = {() => deleteBike()}>Delete</div>
                </div>                */}
            </div>
        </div>
    </Paper>
  )
}
export default UsersCards