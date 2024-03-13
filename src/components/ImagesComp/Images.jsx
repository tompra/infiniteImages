import { useState } from 'react';
import PropTypes from 'prop-types';
import SingleImage from '../SingleImgComp/SingleImage';

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
            const removeFav = listFavorite.filter(
                (fav) => fav.id !== imageClicked.id
            );
            setListFavorite(removeFav);
            setLocalStorage(removeFav);
            alert('Remove favorite image');
        } else {
            const addFav = [...listFavorite, { ...imageClicked, liked: true }];
            setListFavorite(addFav);
            setLocalStorage(addFav);
            alert('Add favorite image');
        }
    };

    return (
        <section className='images-container' data-testid='images-container'>
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
Images.propTypes = {
    images: PropTypes.array,
    handleAddFavorite: PropTypes.func,
};
