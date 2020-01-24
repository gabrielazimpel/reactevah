import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./styles";

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
                        News
                    </Typography>
                    <Button onClick={() => handleDark(!dark)} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}