import { format } from "date-fns"

export function formatDate(date: string) {
    const newFormatdate = format(new Date(date), "dd/MM/yyyy")
    
    return newFormatdate
}

export function formatHour(hour: string) {
    const newFormatHour = format(new Date(hour), "HH:mm")
    
    return newFormatHour
}