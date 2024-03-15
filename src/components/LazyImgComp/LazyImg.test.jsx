import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import LazyImg from './LazyImg';
import { imageMock, placeholderMock } from '../../test/imageMock';

describe('Lazy img component', () => {
    const setInView = vi.fn();
    test('LazyImg component renders without errors', () => {
        render(
            <LazyImg
                image={placeholderMock}
                isView={false}
                setInView={setInView}
            />
        );
    });
    test('Initial renders placeholder image, then it rerenders to the image fetched from the API', () => {
        const { rerender } = render(
            <LazyImg
                image={placeholderMock}
                isView={false}
                setInView={setInView}
            />
        );
        const placeholder = screen.getByTestId('placeholder');
        expect(placeholder).toBeInTheDocument();

        rerender(<LazyImg image={imageMock} isView={true} />);

        const imageApi = screen.getByTestId('image');
        expect(imageApi).toBeInTheDocument();
    });
});
