import React from 'react'
import { AppBar, Toolbar,  makeStyles,Paper} from '@material-ui/core';
import {NavLink} from 'react-router-dom'
import main from '../Assets/Images/main.jpg'

const useStyle = makeStyles({
    header:{
        background: '#111111'
    },
    tabs:{
        textDecoration:'none',
        color:'#f5f5dc',
        marginRight:30,
        fontSize:20,
        
    justifyContent: "center",
    alignItems: "center",
    }
})
const styles = {
    paperContainer: {
        backgroundImage: `url(${main})`
    }
};


const NavBar = () =>{
    const classes =useStyle();
    return (
        <AppBar className={classes.header} position="static">
                <Paper style={styles.paperContainer}>

        <Toolbar>
            <NavLink className={classes.tabs} to ="./" exact>Friends</NavLink>
            <NavLink className={classes.tabs} to ="all" exact>MyFriends</NavLink>
            <NavLink className={classes.tabs} to ="add" exact>AddFriend</NavLink>

        </Toolbar>
        </Paper>

    </AppBar>
   
    );
}
export default NavBar