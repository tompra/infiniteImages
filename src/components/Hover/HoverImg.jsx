import { useState } from 'react';
import PropTypes from 'prop-types';

const HoverImg = ({ image, handleAddFavorite, listFavorite }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { id, alt, photographer } = image;
    const isFavorite = listFavorite.some((fav) => fav.id === id);

    const toggleSeeMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedText = alt.length > 30 ? `${alt.substring(0, 30)}...` : alt;

    return (
        <div className='hover-container' data-testid='hover-image'>
            <p
                onClick={toggleSeeMore}
                className={isExpanded ? 'photo-name expanded' : 'photo-name'}
                data-testid='text-alt'
            >
                {!alt && 'No name'}
                {isExpanded ? alt : truncatedText}
            </p>
            <div className='divider'></div>
            <p className='author'>{photographer}</p>
            <button
                type='button'
                className='btn'
                data-testid='favorite-btn'
                onClick={() => handleAddFavorite(id)}
            >
                {isFavorite ? 'Remove Favorite' : 'Favorite'}
            </button>
        </div>
    );
};
export default HoverImg;

HoverImg.propTypes = {
    image: PropTypes.object,
    handleAddFavorite: PropTypes.func,
    listFavorite: PropTypes.array,
};
