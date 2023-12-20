import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button, ContainerForm, Form } from "./styles";
import { CreateUserFormDataLogin, createUserFormLogin } from "./validationZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app"
import { useAuth } from "../../context/useAuth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi"
import { HandleSpin } from "../../components/Spin";

export function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserFormDataLogin>({
        resolver: zodResolver(createUserFormLogin)
    });
    const auth = useAuth()
    const navigate = useNavigate()

    if(auth.user) {
        return <Navigate to="/dashboard/create-event" replace/>
    }

    async function handleUser(data: CreateUserFormDataLogin) {
        try {
            await auth.authenticate(data.email, data.password)
            reset()
            navigate("/dashboard/create-event")
        } catch (error) {
            if(error instanceof FirebaseError) {
                auth.fireBaseErrors(error.code)
                console.log(error.code)
            }
        }
    }

    return (
        <ContainerForm>
            <div className="header_form">
                <div className="text-login">
                    <FiLogIn />
                    <h2>Faça seu login</h2>
                </div>
                <p>Entre com suas informações de cadastro.</p>
            </div>
            <Form onSubmit={handleSubmit(handleUser)}>
                <div className="container_inputs">
                    <Input 
                        textLabel="E-mail"
                        type="text"
                        placeholder="Digite seu e-mail"
                        register={register}
                        registerName="email"
                    />
                    { errors.email && <span>{ errors.email.message }</span> }
                    <Input 
                        textLabel="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        register={register}
                        registerName="password"
                    />
                    { errors.password && <span>{ errors.password.message }</span> }
                </div>
                <Button type="submit">
                {auth.handleSpinState ? <HandleSpin /> : "Entrar"}
                </Button>
                <p>Ainda não tem uma conta? <Link to="/register">Registre-se</Link></p>
            </Form>
        </ContainerForm>
    )
}