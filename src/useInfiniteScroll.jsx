import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchData) => {
    const observeRef = useRef(null);

    useEffect(() => {
        const handleObserver = (entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                fetchData();
            }
        };
        const options = {
            root: null,
            rootMargin: '10px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver(handleObserver, options);

        if (observeRef.current) {
            observer.observe(observeRef.current);
        }

        return () => {
            if (observeRef.current) {
                observer.unobserve(observeRef.current);
            }
        };
    }, [observeRef, fetchData]);

    return { observeRef };
};

export default useInfiniteScroll;
