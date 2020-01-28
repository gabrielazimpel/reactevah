import React, { useState, useEffect } from "react";
import { Container, Grid, CardMedia, Card, CardContent, Typography, Modal, CardActionArea, CardActions, Button, ExpansionPanelDetails, ExpansionPanelSummary, ExpansionPanel } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import axios from 'axios';
import style from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
                
    const handleOpen = () => {
    setOpen(true);
    };
                
    const handleClose = () => {
    setOpen(false);
};
                

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}




export default function Personagens({ personagem, mudar }) {

    return (

        <Grid item xs={6} lg={3} >

            <Card>

                <CardActionArea>

                    <CardMedia
                        component="img"
                        alt="Personagens"
                        style={{ maxWidth: 345, marginTop: 30 }}
                        image={personagem.img}
                        title="Personagem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {personagem.name} - {personagem.nickname}
                        </Typography>
                    </CardContent>

                </CardActionArea>


                function SimpleModal() {
                    
                    return (
                    
                    <div>
                        <button type="button" onClick={handleOpen}>
                        Open Modal
                        </button>
                        <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                        >
                        <div style={modalStyle} className={classes.paper}>
                            <h2 id="simple-modal-title">Text in a modal</h2>
                            <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </p>
                            <SimpleModal />
                        </div>
                        </Modal>
                    </div>
                    );
                }


            </Card>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Temporadas Participantes</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {personagem.appearance}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
           

 

        </Grid>

    );
}


/*<CardActions>
    <Button size="small" color="primary">
        Episódios Participante
    </Button>
</CardActions>*/

