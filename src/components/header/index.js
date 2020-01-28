import React from "react";
import Link from "react-router-dom/Link";
import { AppBar, Toolbar, IconButton, Typography, Button, Avatar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./styles";


export default function Header({ login }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title} >
                        Menu
                    </Typography>

                    {
                        login ? <Button style={{ backgroundColor: "#B0C4DE", padding: '6px', marginLeft: 20 }} href="/">
                            Sair 
                        </Button> : <Button style={{ backgroundColor: "#B0C4DE", padding: '6px', marginLeft: 20 }} href="/login">
                                Login
                    </Button>
                    }

                       



                </Toolbar>
            </AppBar>
        </div>
    )
}

