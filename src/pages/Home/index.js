import React from "react";
import { Container, Grid } from "@material-ui/core";

export default function Home() {
    return (
        <main>
            <Container maxWidth="md">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <h1 style={{ textAlign: 'center' }}>2</h1>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <h1 style={{ textAlign: 'center' }}>2</h1>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <h1 style={{ textAlign: 'center' }}>2</h1>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}