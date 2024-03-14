import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { initialForty } from '../../test/imageMock';
import Images from './Images';

describe('Image component test', () => {
    test('renders images component without errors', () => {
        render(<Images images={initialForty} />);
    });
    test('render all 40 initial images', () => {
        render(<Images images={initialForty} />);
        const images = screen.getAllByTestId('single-image');
        expect(images).toHaveLength(40);
    });
});
