import { useState } from "react";
import { ContainerSelected } from "./styles";

export interface SelectProps {
    tipo_evento?: string, 
    tipo_categoria?: string
}

interface SelectedPros {
    nameSelect: string;
    arrayOptions: string[];
    setSelectEvent?: (selectEvent: string) => void;
    setSelectCategory?: (selectCategory: string) => void;
}

export function Selected({ 
    nameSelect,
    arrayOptions, 
    setSelectCategory,
    setSelectEvent
}: SelectedPros) {

    const [isSelect, setIsSelect] = useState(false)
    const [option, setOption] = useState(nameSelect)

    function dataSelect(option: string, nameSelect: string) {
        if(nameSelect === "Tipo evento") {
            if(setSelectEvent)
            setSelectEvent(option)
        } else {
            if(setSelectCategory)
            setSelectCategory(option)
        }
        setOption(option)
        setIsSelect(!isSelect)
    }

    return (
        <ContainerSelected>
            <div className="header_select" onClick={() => setIsSelect(!isSelect)}>
                {option}              
                <div className="box_icons">
                    {isSelect 
                        ? <i className='bx bx-chevron-up'></i> 
                        : <i className='bx bx-chevron-down'></i>
                    }
                </div>
            </div>

            {isSelect && (
                <div className="body_select">
                    {arrayOptions.map((option, index) => (
                        <div key={index} className="option" onClick={() => dataSelect(option, nameSelect)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </ContainerSelected>
    )
}