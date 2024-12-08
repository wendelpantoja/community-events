import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { Control, Controller } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";
import { TypeUpdateEvent } from "../../pages/FormUpdate/validationZod";
import { TypeEvent } from "../../pages/CreateEvent/validationZod";


type TextFieldProps = {
    id: string;
    label: string;
    variant: TextFieldVariants;
    name: "titulo" | "descricao";
    control: Control<TypeUpdateEvent | TypeEvent>;
    error?: string;
    multiline: boolean;
    rows?: number;
}

export function TextFieldComponent({ id, label, variant, name, control, error, multiline, rows }:TextFieldProps) {
    return (
        <FormControl fullWidth>
            <Controller 
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value, ref} }) => (
                    <TextField 
                        fullWidth
                        id={id} 
                        label={value == "" ? label : ""} 
                        variant={variant} 
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                        multiline={multiline}
                        rows={rows ? rows : 0}
                    /> 
                )}
            />
            {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
        </FormControl>
    )
}