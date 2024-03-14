import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import App from './App';
import { fetchDataMock } from './test/fetchDataMock';

describe('App component test before fetching data', () => {
    beforeEach(() => {
        render(<App />);
    });
    test('initial render of the app component', () => {});
    test('loading text should appear', async () => {
        vi.mock('./hooks/fetchDataHook/useFetchData', () => ({
            __esModule: true,
            default: vi.fn(() => ({
                isLoading: true,
                isError: false,
                images: [],
                page: 1,
                fetchData: vi.fn(),
            })),
        }));

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    test('error text should not appear', () => {
        const errorText = screen.queryByText(
            'Error fetching images. Please try again.'
        );
        expect(errorText).not.toBeInTheDocument();
    });
    test('fetch data should be triggered once at initial render', () => {
        const fetchDataMock = vi.fn();
        fetchDataMock();

        expect(fetchDataMock).toHaveBeenCalled();
        expect(fetchDataMock).toHaveBeenCalledOnce();
    });
    test('After fetch data trigger images component should appear', async () => {
        render(<App />);

        vi.mock('./hooks/fetchDataHook/useFetchData', () => ({
            __esModule: true,
            default: vi.fn(() => ({
                isLoading: false,
                isError: false,
                images: [fetchDataMock],
                page: 1,
                fetchData: vi.fn(),
            })),
        }));

        await waitFor(() => {
            const imagesComponent = screen.getByTestId('images-container');
            expect(imagesComponent).toBeInTheDocument();
        });
    });
});
