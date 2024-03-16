import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi, expect } from 'vitest';
import { imageMock } from '../../test/imageMock';
import {
    getLocalStorage,
    setLocalStorage,
    isFavorite,
} from '../../test/localStorage';
import HoverImg from './HoverImg';

describe('HoverImg component', () => {
    const handleAddFavorite = vi.fn();
    const listFavorite = [];

    test('HoverImg component without errors', () => {
        render(
            <HoverImg
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                isFavorite={false}
            />
        );
    });
    test('HoverImg component correctly ', () => {
        render(
            <HoverImg
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                isFavorite={false}
            />
        );
        const hoverImg = screen.getByTestId('hover-image');
        expect(hoverImg).toBeInTheDocument();
    });
    test('when clicked on the photo name text it triggers changes the value to show more', () => {
        render(
            <HoverImg
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                isFavorite={false}
            />
        );

        const text = screen.getByTestId('text-alt');
        expect(text.textContent.length).toBeGreaterThan(30);
        fireEvent.click(text);
        expect(text).toHaveClass('photo-name expanded');
    });
    test('when the button is clicked it is added and remove from favorite list and updates the localStorage setting the new item', async () => {
        const { rerender } = render(
            <HoverImg
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                isFavorite={false}
            />
        );
        const favoriteBtn = screen.getByTestId('favorite-btn');
        expect(favoriteBtn).toBeInTheDocument();

        const initialFavorite = isFavorite(listFavorite, imageMock);

        expect(initialFavorite).toBe(false);
        expect(favoriteBtn.textContent).toBe('Favorite');

        fireEvent.click(favoriteBtn);

        expect(handleAddFavorite).toBeCalled();
        expect(handleAddFavorite).toBeCalledWith(imageMock.id);

        const updatedFavorites = [...listFavorite, imageMock];
        const isFavoriteInList = isFavorite(updatedFavorites, imageMock);

        expect(isFavoriteInList).toBe(true);

        setLocalStorage([imageMock]);
        const getLocal = getLocalStorage();

        expect(getLocal).toContainEqual(imageMock);

        rerender(
            <HoverImg
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                isFavorite={true}
            />
        );

        const isInFavList = isFavorite(updatedFavorites, imageMock);
        expect(isInFavList).toBe(true);
        expect(favoriteBtn.textContent).toBe('Remove Favorite');

        fireEvent.click(favoriteBtn);

        expect(handleAddFavorite).toBeCalled();
        expect(handleAddFavorite).toBeCalledWith(imageMock.id);

        const removeFromFavorites = updatedFavorites.filter(
            (fav) => fav.id !== imageMock.id
        );

        expect(removeFromFavorites).not.toContainEqual(imageMock);
        setLocalStorage(removeFromFavorites);

        const removeFromStorage = getLocalStorage();

        expect(removeFromStorage).not.toContainEqual(imageMock);
    });
});
