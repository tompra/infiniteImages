import { useState } from 'react';
import HoverImg from './HoverImg';

const SingleImage = ({ image, handleAddFavorite }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseIn = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    const {
        src: { original },
        alt,
        photographer,
    } = image;
    return (
        <div
            className='image'
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
        >
            <img src={original} alt={alt || photographer} />
            {isHover && (
                <HoverImg image={image} handleAddFavorite={handleAddFavorite} />
            )}
        </div>
    );
};
export default SingleImage;
