import React, { useState, useContext, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import './BikesCards.css'
import './bootstrap.css'


const RentsCards = props => {
    const {rentData} = props

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
    let date = rentData.date.split('T')[0]
    let retrieveDate = (date.split('-')[2] === '30' || date.split('-')[2] === '31' ) ?
     (`2021-02-0${7-(31-date.split('-')[2])}`) : (`2021-02-0${7+date.split('-')[2]}`)

    return (
    <Paper className={classes.mainPaper}>
        <div  className="card mb-3 bike-card">
            <div className="card-body">
                <div className="">
                    <img src='https://static.netshoes.com.br/produtos/bicicleta-ksw-aro-29-freios-a-disco-21-marchas-cambios-shimano/18/CGY-0024-018/CGY-0024-018_zoom1.jpg?ts=1580294446'
                    className="img-thumbnail	mb-3 d-none d-sm-block"></img>
                </div>
                <dl>
                    <div className="info1">
                        <dt>Nº de série:</dt>
                        <dd>{rentData.id}</dd>
                        <dt>Data de aluguel:</dt>
                        <dd>{date.split('T')[0]}</dd>
                    </div>
                    <div className="info2">
                        <dt>Preco:</dt>
                        <dd>R${rentData.price},00</dd>
                        <dt>Data de entrega:</dt>
                        <dd>{retrieveDate.split('T')[0]}</dd>
                    </div> 
                </dl>             
            </div>
        </div> 
    </Paper>
  )
}
export default RentsCards