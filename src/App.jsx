import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { API_KEY } from '../secret.json';
import Images from './Images';

const client = createClient(API_KEY);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [images, setImages] = useState(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await client.photos.curated({ per_page: 10 });
            console.log(response.photos);
            setImages(response.photos);
        } catch (error) {
            setIsError(true);
            console.error('Error by fetching images:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <main>
            <h1>InfiniteImages</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching images. Please try again.</p>
            ) : (
                <Images images={images} />
            )}
        </main>
    );
};
export default App;
