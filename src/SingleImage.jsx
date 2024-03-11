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

    console.log('images', image);
    const {
        src: { original, small, medium, large },
        alt,
        photographer,
    } = image;
    return (
        <div
            className='image'
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
        >
            <img
                src={original}
                srcSet={`${small} 300w, ${medium} 600w, ${large} 900w`}
                sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 10vw'
                alt={alt || photographer}
            />
            {isHover && (
                <HoverImg image={image} handleAddFavorite={handleAddFavorite} />
            )}
        </div>
    );
};
export default SingleImage;
