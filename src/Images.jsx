import { useState } from 'react';
import SingleImage from './SingleImage';

const Images = ({ images }) => {
    const defaultFavList = JSON.parse(
        localStorage.getItem('favorites') || '[]'
    );
    const [listFavorite, setListFavorite] = useState(defaultFavList);

    const setLocalStorage = (favorites) => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

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
            setLocalStorage(newFav);
            alert('Remove favorite image');
        } else {
            const newFav = [...listFavorite, addFavorite];
            setListFavorite(newFav);
            setLocalStorage(newFav);
            alert('Add favorite image');
        }
    };
    return (
        <section className='images-container'>
            {images.map((image, index) => (
                <SingleImage
                    key={`${image.id}-${index}`}
                    image={image}
                    handleAddFavorite={handleAddFavorite}
                />
            ))}
        </section>
    );
};
export default Images;
