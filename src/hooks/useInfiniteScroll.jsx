import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchData) => {
    const observeRef = useRef(null);

    useEffect(() => {
        const handleObserver = (entries) => {
            const target = entries[0];
            console.log('target', target);
            console.log('target.isIntersecting', target.isIntersecting);
            if (target.isIntersecting) {
                fetchData();
            }
        };
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleObserver, options);

        if (observeRef.current) {
            console.log('observing current ref');
            observer.observe(observeRef.current);
        }

        return () => {
            if (observeRef.current) {
                observer.unobserve(observeRef.current);
                console.log('unobserving current ref');
            }
        };
    }, [observeRef, fetchData]);

    return { observeRef };
};

export default useInfiniteScroll;
