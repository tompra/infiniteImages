import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { API_KEY } from '../secret.json';
import Images from './Images';

const client = createClient(API_KEY);
const defaultFavList = JSON.parse(localStorage.getItem('favorites') || '[]');

console.log(defaultFavList);
const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [listFavorite, setListFavorite] = useState(defaultFavList);

    const fetchData = async () => {
        try {
            const response = await client.photos.curated({
                per_page: 20,
                page: page,
            });

            setImages(response.photos);
            setPage(page + 1);
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

    const handleAddFavorite = (id) => {
        const addFavorite = images.find((image) => image.id === id);
        const isAlreadyFavorite = listFavorite.some(
            (fav) => fav.id === addFavorite.id
        );

        if (isAlreadyFavorite) {
            const newFav = listFavorite.filter(
                (fav) => fav.id !== addFavorite.id
            );
            setListFavorite(newFav);
            localStorage.setItem('favorites', JSON.stringify(newFav));
        } else {
            const newFav = [...listFavorite, addFavorite];
            setListFavorite(newFav);
            localStorage.setItem('favorites', JSON.stringify(newFav));
        }
    };

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching images. Please try again.</p>
            ) : (
                <Images images={images} handleAddFavorite={handleAddFavorite} />
            )}
        </main>
    );
};
export default App;
