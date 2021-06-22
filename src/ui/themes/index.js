import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif',
        ],
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    palette: {
        primary: {
            main: '#8C63A9',
            dark: '#74528d',
            contrastText: '#fff',
        },
        error: {
            main: '#F45D3E',
            dark: '#c2482e',
            contrastText: '#fff',
        },
        secondary: {
            main: '#F7CA15',
            dark: '#d2ab11',
        },
        transparent: {
            default: '#fff',
        },
        text: {
            primary: '#000000',
        },
    },
    shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 5,
                textTransform: 'none',
                fontSize: 14,
                height: 40,
                fontWeight: 600,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: '#8C63A9',
            },
        },
        MuiOutlinedInput: {
            root: {
                height: 50,
            },
            input: {
                color: "#000000",
                backgroundColor: '#ffffff',
            },
        },
    },
});

export default theme;
