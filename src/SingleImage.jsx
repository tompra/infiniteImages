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
        src: { original, small, medium, large },
        alt,
        photographer,
    } = image;
    console.log('small', small);
    console.log('medium', medium);
    console.log('large', large);

    return (
        <div
            className='image'
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
        >
            <img
                src={original}
                srcSet={`${small} 300w, ${medium} 600w, ${large} 900w`}
                sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 10vw'
                alt={alt || photographer}
            />
            {isHover && (
                <HoverImg image={image} handleAddFavorite={handleAddFavorite} />
            )}
        </div>
    );
};
export default SingleImage;
