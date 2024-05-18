import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const item = window.localStorage.getItem(key);
    const [value, setValue] = useState<T>(item ? JSON.parse(item) : initialValue);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
