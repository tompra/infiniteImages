import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchData) => {
    const observeRef = useRef(null);

    useEffect(() => {
        console.log('infinite Scrolll EFFECT');
        const handleObserver = (entries) => {
            const target = entries[0];
            console.log('target', target);
            console.log('target.isIntersecting', target.isIntersecting);
            if (target.isIntersecting) {
                console.log('is target intersecting', target.isIntersecting);
                fetchData();
            }
        };
        const options = {
            root: null,
            rootMargin: '500px',
            threshold: 1,
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
