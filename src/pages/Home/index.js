import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Modal } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import axios from 'axios'
import Personagens from "./Personagens";


export default function Home() {

    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        getPersonagens()
    }, []);

    const getPersonagens = async () => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters/')
        setPersonagens(response.data)
    }

    useEffect(() => {
        setLoading(false)
    }, [personagens]);

    return (
        <main>

            <Container maxWidth="md" style={{justifyItems: 'center', textAlign: 'center', display: 'flex'}}>




                <Grid container direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {
                        loading ? <h1>Loading...</h1> : <>
                            {
                                personagens.map((value, index) => (
                                    <Personagens personagem={value}/>
                                ))
                            }
                        </>
                    }
                </Grid>
                {/* <h1>Home</h1>

                <img src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2019/09/os-finalistas-do-concurso-de-fotos-engracadas-de-animais-selvagens.jpg" alt="imagem aleatória" width="700" height="400" />

                 <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <h2 style={{ textAlign: 'center' }}>Vantagens</h2>
                        <p style={{ textAlign: 'center' }}>Trabalhos de Qualidade</p>
                        <p style={{ textAlign: 'center' }}>Bom atendimento</p>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <h2 style={{ textAlign: 'center' }}>Desvantagens</h2>
                        <p style={{ textAlign: 'center' }}>Não existe nenhuma</p>
                        <p style={{ textAlign: 'center' }}>Ainda não consegui pensar em nenhuma</p>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <h2 style={{ textAlign: 'center' }}>Diferencial</h2>
                        <p style={{ textAlign: 'center' }}>Bom gosto musical</p>
                        <p style={{ textAlign: 'center' }}>Gosto de Super-heróis</p>
                        <p style={{ textAlign: 'center' }}>Muita humildade</p>
                    </Grid>
                </Grid> */}

            </Container>
        </main>
    );
}