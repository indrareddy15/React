import React, { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useFetch(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Error in the Network" + res.statusText);
                }
                const apiData = await res.json();
                setData(apiData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
