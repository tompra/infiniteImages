import { useState } from 'react';
import PropTypes from 'prop-types';
import HoverImg from '../Hover/HoverImg';
import LazyImg from '../LazyImg/LazyImg';

const SingleImage = ({ image, handleAddFavorite, listFavorite }) => {
    const [isHover, setIsHover] = useState(false);
    const [isView, setInView] = useState(false);

    const handleMouseIn = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    const isFavorite = listFavorite.some((fav) => fav.id === image.id);

    return (
        <div
            className={`${isFavorite ? 'favorite image' : 'image'}`}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            data-testid='single-image'
        >
            <LazyImg image={image} isView={isView} setInView={setInView} />
            {isHover && (
                <HoverImg
                    image={image}
                    handleAddFavorite={handleAddFavorite}
                    isFavorite={isFavorite}
                />
            )}
        </div>
    );
};
export default SingleImage;
SingleImage.propTypes = {
    image: PropTypes.object,
    handleAddFavorite: PropTypes.func,
    listFavorite: PropTypes.array,
};
