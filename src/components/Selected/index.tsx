import { useState } from "react";
import { ContainerSelected } from "./styles";

const options = [
    "Cursos e Workshops",
    "Tecnologia",
    "Desenvolvimento",
    "Saúde"    
]

export function Selected() {
    const [isSelect, setIsSelect] = useState(false)
    const [option, setOption] = useState("Escolha uma categoria")
    return (
        <ContainerSelected>
            <div className="header_select" onClick={() => setIsSelect(!isSelect)}>
                {option}
                <div className="box_icons">
                    {isSelect ? <i className='bx bx-chevron-up'></i> : <i className='bx bx-chevron-down'></i>}
                </div>
            </div>
            {isSelect && (
                <div className="body_select">
                    {options.map((option, index) => (
                        <div key={index} className="option" onClick={() => {
                            setOption(option)
                            setIsSelect(!isSelect)
                        }}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </ContainerSelected>
    )
}