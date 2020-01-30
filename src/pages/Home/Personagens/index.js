import React, { useState, useEffect } from "react";
import { Container, Grid, CardMedia, Card, CardContent, Typography, Modal, CardActionArea, CardActions, Button, ExpansionPanelDetails, ExpansionPanelSummary, ExpansionPanel, makeStyles } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import axios from 'axios';
import style from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router-dom";
import TreeItens from "../../../components/TreeItem";


export default function Personagens({ personagem, mudar }) {
   
    let history = useHistory();


    function enviarparaindividual(char_id) {
        history.push("/" + char_id)
    }

    return (

        
        <Grid item xs={6} lg={4} >

            <Card style={{marginTop: 40}}>

                <CardActionArea onClick={() => enviarparaindividual(personagem.char_id)}>

                    <CardMedia
                        component="img"
                        alt="Personagens"
                        style={{ maxWidth: 450}}
                        image={personagem.img}
                        title="Personagem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {personagem.name} - {personagem.nickname}
                        </Typography>
                        <TreeItens />
                    </CardContent>

                </CardActionArea>


            </Card>

            <ExpansionPanel style={{marginBottom: 40}}>
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
