import SingleImage from './SingleImage';

const Images = ({ images, handleAddFavorite }) => {
    return (
        <section className='images-container'>
            {images.map((image) => (
                <SingleImage
                    key={image.id}
                    image={image}
                    handleAddFavorite={handleAddFavorite}
                />
            ))}
        </section>
    );
};
export default Images;
