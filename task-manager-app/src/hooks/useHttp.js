import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async(httpCredentials, dataTransform) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(httpCredentials.url, httpCredentials.options);
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            dataTransform(data)
        } catch (err) {
            console.log('sdsdsd')
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);
    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp