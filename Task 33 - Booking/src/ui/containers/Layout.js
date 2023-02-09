// Engine
import store from '../../engine/config/store';
import {Outlet} from 'react-router-dom';
// Core
import {Provider} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {orange} from '@mui/material/colors';
import {Container} from '@mui/material';
// Components
import {Header} from '../components/Header';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
})


export const Layout = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </ThemeProvider>
    </Provider>
);