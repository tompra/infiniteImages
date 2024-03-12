import { useState, useEffect, useRef } from 'react';
const LazyImg = ({ image }) => {
    const {
        src: { original, small, medium, large },
        alt,
        photographer,
    } = image;
    const [isView, setInView] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        console.log('LAZY IMAGES EFFECT');
    }, []);

    return (
        <>
            {isView ? (
                <img
                    src={original}
                    srcSet={`${small} 125w, ${medium} 340w, ${large} 940w`}
                    sizes='(max-width: 125px) 100vw, (max-width: 340px) 100vw, (max-width: 940px) 100vw, 940px'
                    alt={alt || photographer}
                />
            ) : (
                <div ref={imageRef} style={{ height: '100px' }}></div>
            )}
        </>
    );
};
export default LazyImg;
