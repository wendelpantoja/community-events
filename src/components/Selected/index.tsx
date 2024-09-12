import { useState } from "react";
import { ContainerSelected } from "./styles";
import { useFilter } from "../../context/FilterProvider/useFilter";

export interface SelectProps {
    tipo_evento?: string, 
    tipo_categoria?: string
}

interface SelectedPros {
    typeSelect: string;
    arrayOptions: string[];
}

export function Selected({ typeSelect, arrayOptions }: SelectedPros) {
    const { 
        selectEvent, 
        selectCategory, 
        setSelectCategory, 
        setSelectEvent, 
    } = useFilter()

    const [isSelect, setIsSelect] = useState(false)
    

    function dataSelect(option: string, nameSelect: string) {
        if(nameSelect === "event") {
            if(setSelectEvent)
            setSelectEvent(option)
        } else {
            if(setSelectCategory)
            setSelectCategory(option)
        }
        setIsSelect(!isSelect)
    }

    return (
        <ContainerSelected>
            <div className="header_select" onClick={() => setIsSelect(!isSelect)}>
                {typeSelect === "event" ? selectEvent : selectCategory}  
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
                        <div key={index} className="option" onClick={() => dataSelect(option, typeSelect)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </ContainerSelected>
    )
}