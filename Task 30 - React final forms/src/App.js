import { Form, Field } from 'react-final-form';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormTextField from "./components/FormTextField";

const onSubmit = (data, form) => {
    console.log(data.searchInput);
    form.reset();
}

const onValidate = (value) => {
    const errors = {};
    if (value.searchInput === undefined )    errors.searchInput = 'Введите значние'
    return errors;
}

const App = () => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={onValidate}
            render={(props) => {
                const { handleSubmit, valid }  = props ;
                return (
                    <Paper
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            padding: '10px', display: 'flex', alignItems: 'center',
                            width: 400, margin: 'auto', textAlign: 'center'
                        }}
                    >
                        <Box component='div' sx={{ margin: 'auto' }}>
                            <Field
                                component={FormTextField}
                                name="searchInput"
                                label="Search field"
                                type="search"
                            />
                        </Box>
                        <Button
                            disabled={!valid}
                            type="submit"
                            variant="contained">
                            Find
                        </Button>
                    </Paper>
                )
            }}
        />
    )
};

export default App;