
export interface IContextFilter {
    handleSearch: string;
    selectEvent: string;
    selectCategory: string;
    setHandleSearch: (handleSearch: string) => void;
    setSelectEvent: (selectEvent: string) => void;
    setSelectCategory: (selectCategory: string) => void;
}

export interface IFilterProvider {
    children: React.ReactNode;
}