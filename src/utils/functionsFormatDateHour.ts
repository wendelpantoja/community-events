import { format } from "date-fns"

export function formatDate(date: string) {
    const newFormatdate = format(new Date(date), "dd/MM/yyyy")
    
    return newFormatdate
    // console.log(format(date, "yyyy/MM/dd").toString())
}

export function formatHour(hour: Date) {
    const newFormatHour = format(new Date(hour), "HH:mm")
    
    return newFormatHour
}