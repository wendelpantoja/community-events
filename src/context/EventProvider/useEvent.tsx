import { useContext } from "react";
import { EventContext } from ".";

export function useEvent() {
    const context = useContext(EventContext)

    return context
}