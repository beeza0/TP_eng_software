import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import './BikesCards.css'
import './bootstrap.css'


const NewBikeCard = props => {

    const [rentData, setRentData] = useState({id: null, cpf: null, price: null})

    const createRent = () => {
        axios.post('http://localhost:3001/createRent', rentData)
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
                    <label className="new-bike-label" style={{ padding: '47px'}}>Create a new Rent:</label>
                    <div className="create-bike-inputs">
                        <dt>Bike ID</dt>
                        <input className="new-input" style={{ padding: '18px'}} placeholder="ID..." value={rentData.id} onChange={(e) => setRentData({...rentData, id: e.target.value})}/>
                    </div>
                    <div className="create-bike-inputs">
                        <dt>User CPF</dt>
                        <input className="new-input" style={{ padding: '18px'}} placeholder="CPF..." value={rentData.cpf} onChange={(e) => setRentData({...rentData, cpf: e.target.value})}/>
                    </div>
                    <div className="create-bike-inputs">
                        <dt>Price</dt>
                        <input className="new-input" style={{ padding: '18px'}} placeholder="price..." value={rentData.price} onChange={(e) => setRentData({...rentData, price: e.target.value})}/>
                    </div>
                <div style={{marginTop: '25px', marginBottom: '36px'}}>
                        <button className="btn btn-primary" style={{fontSize: '1.5em'}} onClick = {() => {createRent()}}>Create</button>
                    </div>                
                </div>
            </div>
        </Paper>
        )
    }
export default NewBikeCard