import { useState } from 'react';
import PropTypes from 'prop-types';
import SingleImage from '../SingleImg/SingleImage';

const Images = ({ images }) => {
    const defaultFavList = JSON.parse(
        localStorage.getItem('favorites') || '[]'
    );
    const [listFavorite, setListFavorite] = useState(defaultFavList);

    const setLocalStorage = (favorites) => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const handleAddFavorite = (id) => {
        const imageClicked = images.find((image) => image.id === id);

        const isAlreadyFavorite = listFavorite.some(
            (fav) => fav.id === imageClicked.id
        );

        if (isAlreadyFavorite) {
            const updatedFavorites = listFavorite.filter(
                (fav) => fav.id !== id
            );
            setListFavorite(updatedFavorites);
            setLocalStorage(updatedFavorites);
        } else {
            const updatedFavorites = [
                ...listFavorite,
                { ...imageClicked, liked: true },
            ];
            setListFavorite(updatedFavorites);
            setLocalStorage(updatedFavorites);
        }
    };
    return (
        <section className='images-container'>
            {images.map((image, index) => (
                <SingleImage
                    key={`${image.id}-${index}`}
                    image={image}
                    handleAddFavorite={handleAddFavorite}
                    listFavorite={listFavorite}
                />
            ))}
        </section>
    );
};
export default Images;
Images.propTypes = {
    images: PropTypes.array,
    handleAddFavorite: PropTypes.func,
};
