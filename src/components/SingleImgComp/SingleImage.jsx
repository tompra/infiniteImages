import { useState } from 'react';
import PropTypes from 'prop-types';
import HoverImg from '../HoverComp/HoverImg';
import LazyImg from '../LazyImgComp/LazyImg';

const SingleImage = ({ image, handleAddFavorite, listFavorite }) => {
    const [isHover, setIsHover] = useState(false);
    const [isView, setInView] = useState(false);

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
            data-testid='single-image'
        >
            <LazyImg image={image} isView={isView} setInView={setInView} />
            {isHover && (
                <HoverImg
                    image={image}
                    handleAddFavorite={handleAddFavorite}
                    listFavorite={listFavorite}
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
