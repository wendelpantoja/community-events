import { format } from "date-fns"

export function formatDate(date: string) {
    if(date) {
        const newFormatdate = format(new Date(date), "dd/MM/yyyy")
        return newFormatdate
    }
}

export function formatHour(hour: string) {
    if(hour) {
        const newFormatHour = format(new Date(hour), "HH:mm")
        return newFormatHour
    }
}