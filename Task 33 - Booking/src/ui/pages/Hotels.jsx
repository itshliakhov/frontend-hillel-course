// Core
import {useSelector} from 'react-redux';
// Parts
import Box from '@mui/material/Box';
// Engine
import selectorsHotels from '../../engine/core/hotels/selectors';

export const Hotels = () => {
    const hotelsItems = useSelector(selectorsHotels.items);
    return (<>
        <Box component='div'
             sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 gap: '10px',
                 marginTop: '30px',
                 justifyContent: 'center',

             }}>
            {hotelsItems.map((item) =>
                <Box
                    component={'div'}
                    key={item.id}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '600px',
                        border: '1px solid black',
                        gap: '10px',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <Box
                        component={'h1'}
                        sx={{fontSize: '24px'}}>
                        Hotel Name: <Box
                        component={'span'}
                        sx={{color: 'primary.main'}}
                    >
                        {item.name}
                    </Box>
                    </Box>
                    <Box component={'h3'}>
                        Address: <Box
                        component={'span'}
                        sx={{color: 'primary.main'}}
                    >
                        {item.address}
                    </Box>
                    </Box>
                    <Box component={'p'}> Rating of hotel: <Box
                        component={'span'}
                        sx={{
                            color: 'primary.main',
                            fontWeight: "bold",
                            fontSize: '16px'
                        }}
                    >
                        {item.hotel_rating}
                    </Box> Stars</Box>
                </Box>
            )}
        </Box>
    </>)
}