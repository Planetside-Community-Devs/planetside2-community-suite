import { createMuiTheme } from 'material-ui';
import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: grey[600],
            main: grey[800],
            dark: grey[900],
            contrastText: '#fff',
        },
        secondary: {
            light: amber[300],
            main: amber[800],
            dark: amber[900],
            contrastText: '#000',
        },
    },
});