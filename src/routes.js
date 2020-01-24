import React, { useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Login from "./pages/Login";
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
                <Header dark={theme} handleDark={handleDark} />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Footer />

            </ThemeProvider>
        </>
    );
}