import React, { useState, useContext, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
//import bike_logo from '../assets/bike_logo.png'


const BikesCards = props => {
    const {bikeData} = props

    const useStyles = makeStyles((theme) => ({
        mainPaper: {
            width: '40%',
            height: 'fit-content',
            padding: '5vw',
            borderRadius: '25px',
            backgroundColor: 'rgb(220, 220, 220)',
            marginTop: '50px'
        }
    }))

    const classes = useStyles()

    return (
    <Paper className={classes.mainPaper}>
        <div className="bike-card-container">
            <div className="bike-card-section">
                <img style={{height: '90px'}} src='https://static.netshoes.com.br/produtos/bicicleta-ksw-aro-29-freios-a-disco-21-marchas-cambios-shimano/18/CGY-0024-018/CGY-0024-018_zoom1.jpg?ts=1580294446'></img>
            </div>
            <div className="bike-card-section">
                <label>Nº de série</label>
                <label>{bikeData.id}</label>
            </div>
            <div className="bike-card-section">
                <label>Preco</label>
                <label>{bikeData.price}</label>
            </div>
        </div>
        
        
        {/* <img src='https://static.netshoes.com.br/produtos/bicicleta-ksw-aro-29-freios-a-disco-21-marchas-cambios-shimano/18/CGY-0024-018/CGY-0024-018_zoom1.jpg?ts=1580294446'></img> */}
    </Paper>
  )
}
//<img src={bike_logo} alt=""/>
export default BikesCards