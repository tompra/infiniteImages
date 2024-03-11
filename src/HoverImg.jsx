const HoverImg = ({ image, handleAddFavorite }) => {
    const { id, alt, photographer } = image;
    return (
        <div className='hover-container'>
            <p>{alt || 'No name'}</p>
            <div className='divider'></div>
            <p>{photographer}</p>
            <button
                type='button'
                className='btn'
                onClick={() => handleAddFavorite(id)}
            >
                Favourite
            </button>
        </div>
    );
};
export default HoverImg;
