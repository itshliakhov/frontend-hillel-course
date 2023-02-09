// Parts
import Stack from '@mui/material/Stack';
import {Button} from './Button'
import Box from "@mui/material/Box";
import {styled} from '@mui/system';
// Engine
import {routes} from '../../engine/config/routers';

const Wrapper = styled(Box)({
    display: 'flex',
    padding: '20px 24px',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    alignItems: 'center'
})

export const Header = () => {
    return (
        <Wrapper
            component={'header'}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                component={'div'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    component={'div'}
                    sx={{
                        display: 'block',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        marginRight: '10px'
                    }}/>
                <Box
                    component={'span'}
                    sx={{
                        color: 'primary.main',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        lineHeight: 1,
                        margin: 0
                    }}
                >
                    Booking
                </Box>
            </Box>
            <Stack spacing={2} direction={'row'}>
                <Button to={routes.home}>Home</Button>
                <Button to={routes.about}>About</Button>
            </Stack>
        </Wrapper>
    )
}