import { useState } from 'react';
import PropTypes from 'prop-types';

const HoverImg = ({ image, handleAddFavorite }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { id, alt, photographer } = image;

    const toggleSeeMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='hover-container'>
            <p
                onClick={toggleSeeMore}
                className={isExpanded ? 'expanded photo-name' : 'photo-name'}
            >
                {alt || 'No name'}
            </p>
            <div className='divider'></div>
            <p className='author'>{photographer}</p>
            <button
                type='button'
                className='btn'
                onClick={() => handleAddFavorite(id)}
            >
                Favourite
            </button>
        </div>
    );
};
export default HoverImg;

HoverImg.propTypes = {
    image: PropTypes.object,
    handleAddFavorite: PropTypes.func,
};
