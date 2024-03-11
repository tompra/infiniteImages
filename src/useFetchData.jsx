import { useState, useEffect } from 'react';
import { API_KEY } from '../secret.json';

const useFetchData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log('page in fetch top', page);
        try {
            const response = await fetch(
                `https://api.pexels.com/v1/curated?page=${page}&per_page=40`,
                {
                    headers: {
                        Authorization: API_KEY,
                    },
                }
            );
            if (!response.ok) {
                setIsError(true);
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setImages((prevImages) => [...prevImages, ...data.photos]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            setIsError(true);
            console.error('Error by fetching images:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, images };
};

export default useFetchData;
