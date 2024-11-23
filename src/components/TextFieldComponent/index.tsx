import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { Control, Controller } from "react-hook-form";
import { TypeEvent } from "../../pages/CreateEvent/validationZod";
import { FormControl, FormHelperText } from "@mui/material";


type TextFieldProps = {
    id: string;
    label: string;
    variant: TextFieldVariants;
    name: "titulo" | "descricao";
    control: Control<TypeEvent>;
    error?: string;
}

export function TextFieldComponent({ id, label, variant, name, control, error }:TextFieldProps) {
    return (
        <FormControl fullWidth>
            <Controller 
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value, ref} }) => (
                    <TextField 
                        fullWidth
                        id={id} 
                        label={label} 
                        variant={variant} 
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                    /> 
                )}
            />
            {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
        </FormControl>
    )
}