import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import LazyImg from './LazyImg';
import { imageMock, placeholderMock } from '../../test/imageMock';

describe('Lazy img component', () => {
    test('LazyImg component renders without errors', () => {
        render(
            <LazyImg
                image={placeholderMock}
                isView={false}
                setInView={vi.fn()}
            />
        );
    });
    test('Initial renders placeholder image, then it rerenders to the image fetched from the API', () => {
        const { rerender } = render(
            <LazyImg
                image={placeholderMock}
                isView={false}
                setInView={vi.fn()}
            />
        );
        const placeholder = screen.getByTestId('placeholder');
        expect(placeholder).toBeInTheDocument();
        rerender(<LazyImg image={imageMock} isView={true} />);
        const imageApi = screen.getByTestId('image');
        expect(imageApi).toBeInTheDocument();
    });
});
