import React, { useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HeaderHome from "./pages/Home/headerhome";
import Home from "./pages/Home";
import FooterHome from "./pages/Home/footerhome";
import Header from "./components/header";
import Indivídual from "./pages/Personagensindividuais"
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Footer from "./components/footer";
import outerTheme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import outerThemeDark from "./themeDark";


export default function Rotas() {

    const [theme, setTheme] = useState(false);

    const handleDark = (value) => {
        setTheme(value)
    }

    return (
        <>
            <ThemeProvider theme={theme ? outerThemeDark : outerTheme}>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Home />
                        <FooterHome />
                    </Route>
                    <Route exact path="/:id">
                        <Header />
                        <Indivídual />
                        <FooterHome />
                    </Route>
                    <Route exact path="/login">
                        <Header login />
                        <Login />
                        <Footer />
                    </Route>
                    <Route exact path="/cadastro">
                        <Header />
                        <Cadastro />
                        <Footer />
                    </Route>
                </Switch>

            </ThemeProvider>
        </>
    );
}