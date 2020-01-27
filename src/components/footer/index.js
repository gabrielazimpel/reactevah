import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const footerStyle = ({
    padding: 50,
    backgroundColor :'#1C1C1C',
    marginTop: 'auto',
    color: 'white',
})

export default function Footer() {
    return (

        <footer style={footerStyle}>
            <Container maxWidth="lg" >
                
                    <h3 style={{textAlign: 'center'}}>Desenvolvido por @Libellum 2019</h3>

            </Container>
        </footer>

    )
}
