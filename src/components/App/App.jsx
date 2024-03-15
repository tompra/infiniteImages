import Images from '../ImagesContainer/Images';
import useFetchData from '../../hooks/fetchDataHook/useFetchData';
import useInfiniteScroll from '../../hooks/infiniteScrollHook/useInfiniteScroll';
import { useEffect } from 'react';

const App = () => {
    const { isLoading, isError, images, fetchData } = useFetchData();
    const { observeRef } = useInfiniteScroll(fetchData);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            {isLoading ? (
                <p data-testid='loading'>Loading...</p>
            ) : isError ? (
                <p data-testid='error-message'>
                    Error fetching images. Please try again.
                </p>
            ) : (
                <div data-testid='images-container'>
                    <Images images={images} />
                    <div ref={observeRef}></div>
                </div>
            )}
        </main>
    );
};
export default App;
