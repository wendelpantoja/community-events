import { ContainerSpin } from "./styles";

type SpinProps = {
    typeColor: string;
}

export function HandleSpin({ typeColor }: SpinProps) {
    return (
        <ContainerSpin>
            <div className={`${typeColor}`}></div>
        </ContainerSpin>
    )
}