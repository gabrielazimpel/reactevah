import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TextField, Container, Grid, Button } from "@material-ui/core";
import Personagens from '../Home/Personagens'
import { useHistory } from "react-router-dom";

export default function Individual() {

    let history = useHistory()

    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);

    let { id } = useParams();
    

    useEffect(() => {
        setLoading(true)
        getPerso(id)

    }, []);


    const getPerso = async (name) => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters/' + id)
        setPersonagens(response.data)
    }

    useEffect(() => {
        setLoading(false)
    }, [personagens]);

    return (

        <main>

            <Container maxWidth="md" style={{ justifyItems: 'center', textAlign: 'center', display: 'flex' }}>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {
                        loading ? <h1>Loading...</h1> : <>
                            {
                                personagens.map((value, index) => (
                                    <Personagens personagem={value} />
                                ))
                            }
                        </>
                    }
                </Grid>
            <Button onClick={()=> history.goBack()}>
                Voltar
            </Button>
            </Container>
        </main>

    );



}