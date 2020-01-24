import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

export default function Footer() {
    return (

        <footer>
            <Container maxWidth="lg" >
                <Grid
                    container
                    style={{ textAlign: 'center'}}
                    direction="row"
                    justify="center"
                    alignItems="flex-start">
                    <Grid item xs={12} lg={4}>
                        <h3>Serviços Adicionais</h3>
                        <p>Compras</p>
                        <p>Ajuda</p>

                    </Grid>
                    <Grid item xs={12} lg={4}>


                        <h3 style={{ textAlign: 'center' }}>Serviços Adicionais</h3>
                        <p>Compras</p>
                        <p>Ajuda</p>
                    </Grid>
                    <Grid item xs={12} lg={4}>


                        <h3 style={{ textAlign: 'center' }}>Serviços Adicionais</h3>
                        <p>Compras</p>

                    </Grid>
                </Grid>

            </Container>
        </footer>
    )
} 