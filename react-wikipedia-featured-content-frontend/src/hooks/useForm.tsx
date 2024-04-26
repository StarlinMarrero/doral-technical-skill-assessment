"use client";
import { useState } from "react";

export const useForm = <T extends object>(initState: T) => {
    const [state, setState] = useState(initState);

    const onChange = (value: string | number | boolean | Date | File | null | undefined | unknown, field: keyof T) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    const setFormData = (data: T) => {
        setState(data);
    };

    const clear = () => {
        setState(initState);
    };

    return {
        ...state,
        form: state,
        onChange,
        clear,
        setFormData,
    };
};
