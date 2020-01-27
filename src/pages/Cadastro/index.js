import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

export default function Cadastro() {


    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: ''
    });

    function submit(c) {
        console.log(form)
        c.preventDefault()
    }

    return (
        <main>
            <Container maxWidth="sm" style={{marginTop: 80, marginBottom: 50}}>
                
                <h2>Novo Cadastro</h2>
                
                <form onSubmit={submit}>
                    <TextField
                        autoComplete="nome"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="nome"
                        label="Nome Completo"
                        autoFocus
                        
                        onChange={(c) => setForm({ ...form, nome: c.target.value}) }
                        style={{marginBottom: 15, border: 'blue'}}
                    />
                     <TextField
                        autoComplete="email"
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        onChange={(c) => setForm({ ...form, email: c.target.value})  }
                        style={{marginBottom: 15}}
                    />
                    <TextField
                        autoComplete=""
                        name="telefone"
                        variant="outlined"
                        required
                        fullWidth
                        id="telefone"
                        label="Telefone"
                        onChange={(c) => setForm({ ...form, telefone: c.target.value})  }
                        style={{marginBottom: 15}}
                    />
                    <TextField
                        autoComplete=""
                        name="senha"
                        variant="outlined"
                        required
                        fullWidth
                        id="senha"
                        label="Senha"
                        onChange={(c) => setForm({ ...form, senha: c.target.value})  }
                        style={{marginBottom: 15}}
                    />
                    <Button fullWidth type="submit" href="/login" style={{fontSize: 20}}>
                        Cadastrar
                    </Button>
                
                </form>
            </Container>
        </main>
    );
}

