import { createMuiTheme } from "@material-ui/core";


const outerThemeDark = createMuiTheme({
    palette: {
        primary: {
            light: '#8d8d8d',
            main: '#FFF',
        },
        secondary: {
            main: 'rgb(0, 155, 214)',
        },
        success: {
            main: '#4caf50'
        }
    },
});

export default outerThemeDark;
