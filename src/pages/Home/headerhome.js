import React from "react";
import Link from "react-router-dom/Link";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../../components/header/styles";


export default function Header({ dark, handleDark }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Menu 
                    </Typography>
                    <Typography variant="h5" style={{marginRight: 500}}>
                    Libellum Desenvolvimentos
                    </Typography>
                    <Button style={{backgroundColor: "#00FFFF"}} href="/login">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}