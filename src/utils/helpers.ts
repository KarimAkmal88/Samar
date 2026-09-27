import type { InputProps } from "../types/inputProps";


export function getInputProps(type: string = "text", label?: string): InputProps {
    return {
        variant: "bordered",
        type: type,
        label: label,
    };
}