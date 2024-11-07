import TextField, { TextFieldVariants } from "@mui/material/TextField";

type TextFieldProps = {
    id: string;
    label: string;
    variant: TextFieldVariants;
}

export function TextFieldComponent({ id, label, variant }:TextFieldProps) {
    return (
        <TextField 
            
            fullWidth
            id={id} 
            label={label} 
            variant={variant} 
        /> 
    )
}