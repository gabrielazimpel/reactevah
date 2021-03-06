import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Modal } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import axios from 'axios'
import Personagens from "./Personagens";
import { useParams } from 'react-router-dom';
/*import Search from "./search";*/



export default function Home() {


    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    let { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getPersonagens()
    }, []);

    useEffect(() => {
        getByName(search)

    }, [search]);

    const getByName = async (search) => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters', { params: { name: search } })
        setPersonagens(response.data)
    }

    const getPersonagens = async () => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters/')
        setPersonagens(response.data)
    }

    useEffect(() => {
        setLoading(false)
    }, [personagens]);

    return (
        <main>

            <Container maxWidth="md" style={{ justifyItems: 'center', textAlign: 'center', display: 'flex' }}>

                
                <TextField onChange={(e) => setSearch(e.target.value)} />

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

            </Container>
        </main>
    );
}

/**/  /*<Search />*/