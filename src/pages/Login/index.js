import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


export default function Login() {

    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    function submit(e) {
        console.log(form)
        e.preventDefault()
    }

    function mudarbotao() {
        window.document.getElementById("enviar").style.background = "#00FFFF";
        window.document.getElementById("enviar").style.color="#FFFF";
    }


    function mudarbotaosair() {
        window.document.getElementById("enviar").style.background = "#000";
        window.document.getElementById("enviar").style.color="#FFFF";
    }

    


    return (
        <main>
            <Container maxWidth="sm" style={{ marginTop: 80, marginBottom: 50 }}>

                <h2>Realizar Login</h2>
                <form onSubmit={submit} >
                    <TextField
                        autoComplete="email"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        autoFocus
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{ marginBottom: 15 }}
                    />
                    <TextField
                        autoComplete="senha"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="senha"
                        onChange={(e) => setForm({ ...form, senha: e.target.value })}
                        style={{ marginBottom: 15 }}
                    />
                    <Button fullWidth onMouseEnter={mudarbotao} onMouseLeave={mudarbotaosair} onClick={() => mudarbotao()} type="submit" id="enviar" style={{ marginBottom: 20 }}>
                        Login
                    </Button>
                </form>

                <a href="/cadastro">Ainda não possui Conta? Clique aqui e se cadastre!</a>

            </Container>

        </main>
    );
}