import { createContext, useState } from "react";
import { IContextFilter, IFilterProvider } from "./types";

export const FilterContext = createContext<IContextFilter>({} as IContextFilter)


export function FilterProvider({ children }: IFilterProvider) {
    const [handleSearch, setHandleSearch] = useState<string>("")
    const [selectEvent, setSelectEvent] = useState<string>("Tipo evento")
    const [selectCategory, setSelectCategory] = useState<string>("Escolha uma categoria")

    console.log(selectCategory)
    console.log(selectEvent)
    console.log(handleSearch)

    return (
        <FilterContext.Provider value={{
            handleSearch,
            selectEvent,
            selectCategory,
            setHandleSearch,
            setSelectEvent,
            setSelectCategory
        }}>
            { children }
        </FilterContext.Provider>
    )
}
