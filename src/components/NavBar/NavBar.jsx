import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from '../../assests/logo.png';
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'

const NavBar = ( { totalItems }) => {
    const classes= useStyles();
    const location= useLocation();

    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
              <Toolbar>
                  <Typography  component={Link} to='/' variant="h6" className= {classes.title} color= "inherit">
                      <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                      Nike
                  </Typography>
                  <div className={classes.grow} />
                    <IconButton component={Link} to='/login' color="inherit">
                        <Badge color="secondary">
                            <AccountCircleIcon/>
                        </Badge>
                    </IconButton>
                  {location.pathname === '/' && (
                  <div className={classes.button}>
                      <IconButton component={Link} to='/cart' aria-label="show cart items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart/>
                          </Badge>
                      </IconButton>
                  </div> )}
              </Toolbar>
          </AppBar>
        </>
    )
}

export default NavBar
