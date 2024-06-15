import { useState } from 'react'

const useLocalStorage = (key: string, defaultValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)

            if (value) {
                return JSON.parse(value)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    })


    const setValue = (newValue: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (error) {
            console.log(error)
        }
        setStoredValue(newValue)
    }

    return [storedValue, setValue]
}

export default useLocalStorage