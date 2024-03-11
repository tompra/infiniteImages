import { useState } from 'react';
import SingleImage from './SingleImage';

const Images = ({ images }) => {
    const defaultFavList = JSON.parse(
        localStorage.getItem('favorites') || '[]'
    );
    const [listFavorite, setListFavorite] = useState(defaultFavList);

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
            alert('Remove favorite image');
        } else {
            const newFav = [...listFavorite, addFavorite];
            setListFavorite(newFav);
            localStorage.setItem('favorites', JSON.stringify(newFav));
            alert('Add favorite image');
        }
    };
    return (
        <section className='images-container'>
            {images.map((image) => (
                <SingleImage
                    key={image.id}
                    image={image}
                    handleAddFavorite={handleAddFavorite}
                />
            ))}
        </section>
    );
};
export default Images;
