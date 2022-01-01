import { useState, useCallback } from 'react'

const useHttpRequest = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const sendRequest = useCallback(async (credentials, dataTransform = (data) => console.log(data)) => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `https://food-order-app-42ed8-default-rtdb.asia-southeast1.firebasedatabase.app/${credentials.collection}`,
                credentials?.options
            );
            if (!response.ok) throw new Error('Something went wrong!!')
            const data = await response.json()
            dataTransform(data)
        } catch (e) {
            setIsError(true)
            return {isFailed: true}
        }
        setIsLoading(false)
    }, [])
    return {
        sendRequest,
        isLoading,
        isError
    }
}

export default useHttpRequest