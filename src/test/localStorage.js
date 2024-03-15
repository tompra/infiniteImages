export const getLocalStorage = () => {
    const favorites = window.localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};
export const setLocalStorage = (fav) =>
    window.localStorage.setItem('favorites', JSON.stringify(fav));

export const isFavorite = (list, image) =>
    list.some((fav) => fav.id === image.id);
