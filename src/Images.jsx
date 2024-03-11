import SingleImage from './SingleImage';

const Images = ({ images }) => {
    console.log('images:', images);
    return (
        <div>
            {images.map((image) => (
                <SingleImage key={image.id} image={image} />
            ))}
        </div>
    );
};
export default Images;
