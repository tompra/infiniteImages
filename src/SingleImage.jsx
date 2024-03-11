const SingleImage = ({ image }) => {
    console.log('single images', image);
    return (
        <div>
            <img
                src={image.src.original}
                alt={image.alt || image.photographer}
                style={{ width: '200px' }}
            />
        </div>
    );
};
export default SingleImage;
