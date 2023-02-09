import {TextField} from "@mui/material";

const FormTextField = (props) => {
    const {
        margin,
        label,
        input,
        meta,
        type
    } = props;
    return (
        <>
            <TextField
                {...input}
                margin = {margin}
                label = {label}
                type = {type}
                error={Boolean(meta.error && meta.touched)}
                helperText = {meta.error && meta.touched ? meta.error : null}
            />
        </>
    )
};

export default FormTextField;