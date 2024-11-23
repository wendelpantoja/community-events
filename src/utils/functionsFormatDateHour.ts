import { format } from "date-fns"

export function formatDate(date: Date) {
    const newFormatdate = format(new Date(date), "dd/MM/yyyy")
    
    return newFormatdate
}

export function formatHour(hour: Date) {
    const newFormatHour = format(new Date(hour), "H:mm")
    
    return newFormatHour
}