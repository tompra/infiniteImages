import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi, expect } from 'vitest';
import { imageMock } from '../../test/imageMock';
import SingleImage from './SingleImage';

describe('Single image component test', () => {
    const handleAddFavorite = vi.fn();
    const listFavorite = [];
    test('renders single image component without errors', () => {
        render(
            <SingleImage
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                listFavorite={listFavorite}
            />
        );
    });
    test('renders image correctly', () => {
        render(
            <SingleImage
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                listFavorite={listFavorite}
            />
        );
        const singleImage = screen.getByTestId('single-image');
        expect(singleImage).toBeInTheDocument();
    });

    test('shows HoverImg component when mouse is over the image', () => {
        render(
            <SingleImage
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                listFavorite={listFavorite}
            />
        );
        const singleImage = screen.getByTestId('single-image');

        fireEvent.mouseOver(singleImage);

        const hoverImage = screen.getByTestId('hover-image');

        expect(hoverImage).toBeInTheDocument();
    });
    test('hides HoverImg component when mouse is over the image', () => {
        render(
            <SingleImage
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                listFavorite={listFavorite}
            />
        );
        const singleImage = screen.getByTestId('single-image');

        fireEvent.mouseOver(singleImage);
        fireEvent.mouseOut(singleImage);

        const imageApi = screen.getByTestId('placeholder');

        expect(imageApi).toBeInTheDocument();
    });
    test('should render with class favorite when the images is favorite', () => {
        const listFavorite = [imageMock];
        render(
            <SingleImage
                image={imageMock}
                handleAddFavorite={handleAddFavorite}
                listFavorite={listFavorite}
            />
        );

        const isFavorite = listFavorite.some((fav) => fav.id === imageMock.id);
        const singleImage = screen.getByTestId('single-image');
        expect(isFavorite).toBe(true);
        expect(singleImage).toHaveClass('favorite image');

        const updateListFavorite = [];

        act(() => {
            render(
                <SingleImage
                    image={imageMock}
                    handleAddFavorite={handleAddFavorite}
                    listFavorite={updateListFavorite}
                />
            );
        });

        expect(singleImage).toHaveClass('image');
    });
});
