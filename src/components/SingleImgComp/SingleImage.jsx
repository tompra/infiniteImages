import { useState } from 'react';
import PropTypes from 'prop-types';
import HoverImg from '../HoverComp/HoverImg';
import LazyImg from '../LazyImgComp/LazyImg';

const SingleImage = ({ image, handleAddFavorite }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseIn = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    return (
        <div
            className='image'
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
        >
            <LazyImg image={image} />
            {isHover && (
                <HoverImg image={image} handleAddFavorite={handleAddFavorite} />
            )}
        </div>
    );
};
export default SingleImage;
SingleImage.propTypes = {
    image: PropTypes.object,
    handleAddFavorite: PropTypes.func,
};