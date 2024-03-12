import Images from './Images';
import useFetchData from './useFetchData';
import useInfiniteScroll from './useInfiniteScroll';
import { useEffect } from 'react';

const App = () => {
    const { isLoading, isError, images, fetchData } = useFetchData();
    const { observeRef } = useInfiniteScroll();

    useEffect(() => {
        console.log('fetch in UseEffect');
        fetchData();
    }, []);

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching images. Please try again.</p>
            ) : (
                <>
                    <Images images={images} />
                    <div ref={observeRef}></div>
                </>
            )}
        </main>
    );
};
export default App;
