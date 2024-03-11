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

    return (
        <div
            className='image'
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
        >
            <img
                src={original}
                srcSet={`${small} 125w, ${medium} 340w, ${large} 940w`}
                sizes='(max-width: 125px) 100vw, (max-width: 340px) 100vw, (max-width: 940px) 100vw, 940px'
                alt={alt || photographer}
            />
            {isHover && (
                <HoverImg image={image} handleAddFavorite={handleAddFavorite} />
            )}
        </div>
    );
};
export default SingleImage;
