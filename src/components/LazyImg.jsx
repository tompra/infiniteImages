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
                />
            ) : (
                <img
                    ref={imageRef}
                    src='https://placehold.co/100x150/000000/FFF?text=Placerholder'
                />
            )}
        </>
    );
};
export default LazyImg;
