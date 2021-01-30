import React, { useState, useContext, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import './BikesCards.css'
//import bike_logo from '../assets/bike_logo.png'


const BikesCards = props => {
    const {bikeData} = props

    const useStyles = makeStyles((theme) => ({
        mainPaper: {
            width: '40%',
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
                <div className="">
                    <img src='https://static.netshoes.com.br/produtos/bicicleta-ksw-aro-29-freios-a-disco-21-marchas-cambios-shimano/18/CGY-0024-018/CGY-0024-018_zoom1.jpg?ts=1580294446'
                    className="img-thumbnail mb-3 d-none d-sm-block"></img>
                </div>
                <dl>
                    <div className="info1">
                        <dt>Nº de série:</dt>
                        <dd>{bikeData.id}</dd>
                    </div>
                    <div className="info2">
                        <dt>Preco:</dt>
                        <dd>R${bikeData.price},00</dd>
                    </div> 
                </dl>
                <div className="button">
                    <button className="btn btn-primary">Alugar</button>
                </div>                
            </div>
        </div>
        
        
        {/* <img src='https://static.netshoes.com.br/produtos/bicicleta-ksw-aro-29-freios-a-disco-21-marchas-cambios-shimano/18/CGY-0024-018/CGY-0024-018_zoom1.jpg?ts=1580294446'></img> */}
    </Paper>
  )
}
//<img src={bike_logo} alt=""/>
export default BikesCards