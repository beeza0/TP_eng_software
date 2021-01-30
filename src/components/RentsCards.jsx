import React, { useState, useContext, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'


const RentsCards = props => {
    const {rentData} = props

    const useStyles = makeStyles((theme) => ({
        mainPaper: {
            width: '40%',
            height: 'fit-content',
            padding: '5vw',
            borderRadius: '25px',
            marginBottom: '35px',
            backgroundColor: 'rgb(220, 220, 220)'
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
                <label>{rentData.id}</label>
            </div>
            <div className="bike-card-section">
                <label>Preco</label>
                <label>{rentData.price}</label>
            </div>
        </div>
        
        
        {/* <img src='https://static.netshoes.com.br/produtos/bicicleta-ksw-aro-29-freios-a-disco-21-marchas-cambios-shimano/18/CGY-0024-018/CGY-0024-018_zoom1.jpg?ts=1580294446'></img> */}
    </Paper>
  )
}
export default RentsCards