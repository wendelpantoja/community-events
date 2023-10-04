import { Input } from "../Input";
import { Button, ContainerForm, FormComponent } from "./styles";

interface FormProps {
    type: string;
    titulo: string;
}

export function Form({ type, titulo }: FormProps) {
    if(type === "register") {
        return (
            <ContainerForm>
                <h2>{titulo}</h2>
                <FormComponent>
                    <div className="container_inputs">
                        <Input 
                            type="text"
                            placeholder="Digite seu e-mail"
                            label="E-mail"
                        />
                        <Input 
                            type="text"
                            placeholder="Digite sua senha"
                            label="Senha"
                        />
                        <Input 
                            type="text"
                            placeholder="Confirme sua senha"
                            label="Confirmação"
                        />
                    </div>
                    <Button>Cadastrar</Button>
                </FormComponent>
            </ContainerForm>
        )
    }
    if(type === "login") {
        return (
            <ContainerForm>
                <h2>{titulo}</h2>
                <FormComponent>
                    <div className="container_inputs">
                        <Input 
                            type="text"
                            placeholder="Digite seu e-mail"
                            label="E-mail"
                        />
                        <Input 
                            type="text"
                            placeholder="Digite sua senha"
                            label="Senha"
                        />
                    </div>
                    <Button>Entrar</Button>
                </FormComponent>
            </ContainerForm>
        )
    }
}