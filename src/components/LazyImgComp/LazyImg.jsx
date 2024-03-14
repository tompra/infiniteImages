import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const LazyImg = ({ image, isView, setInView }) => {
    const {
        src: { original, small, medium, large },
        alt,
        photographer,
    } = image;
    const imageRef = useRef(null);

    useEffect(() => {
        const handleObserver = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            });
        };
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(handleObserver, options);

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <>
            {isView ? (
                <img
                    src={original}
                    srcSet={`${small} 125w, ${medium} 340w, ${large} 940w`}
                    sizes='(max-width: 125px) 100vw, (max-width: 340px) 100vw, (max-width: 940px) 100vw, 940px'
                    alt={alt || photographer}
                    data-testid='image'
                />
            ) : (
                <img
                    ref={imageRef}
                    src='https://placehold.co/100x150/000000/FFF?text=Placeholder'
                    alt='Placeholder'
                    data-testid='placeholder'
                />
            )}
        </>
    );
};
export default LazyImg;
LazyImg.propTypes = {
    image: PropTypes.object,
    isView: PropTypes.bool,
    setInView: PropTypes.func,
};
