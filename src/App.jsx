import Images from './Images';
import useFetchData from './useFetchData';

const App = () => {
    const { isLoading, isError, images } = useFetchData();

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching images. Please try again.</p>
            ) : (
                <Images images={images} />
            )}
        </main>
    );
};
export default App;
