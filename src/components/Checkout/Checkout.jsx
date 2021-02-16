import React,{useState,useEffect} from 'react'
import { Container,Typography,List, ListItem,ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles'

const Checkout = ({handleEmptyCart}) => {
    const classes = useStyles();

    return (
        <Container>
             <div className={classes.toolbar} />
             <Typography className={classes.title}><CheckCircleIcon style={{fill: "green", fontSize:"100px"}}/></Typography>   
             <Typography variant="h4" className={classes.title} gutterBottom>Thank you for Shopping with us,
                <Link className={classes.link} to='/' onClick={handleEmptyCart}>Continue Shopping!</Link>
            </Typography>   
        </Container>
    )
}

export default Checkout;