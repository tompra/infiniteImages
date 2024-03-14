import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import App from './App';
import { initialForty } from './test/imageMock';
import * as useFetchDataMock from './hooks/fetchDataHook/useFetchData';

const spyFetch = vi.spyOn(useFetchDataMock, 'default');

describe('App component test before fetching data', () => {
    test('initial render of the app component', () => {
        render(<App />);
    });
    test('loading text should appear', async () => {
        spyFetch.mockReturnValue({
            isLoading: true,
            isError: false,
            images: [],
            page: 1,
            fetchData: vi.fn(),
        });

        render(<App />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    test('error text should appear', () => {
        spyFetch.mockReturnValue({
            isLoading: false,
            isError: true,
            images: [],
            page: 1,
            fetchData: vi.fn(),
        });

        render(<App />);
        const errorText = screen.getByTestId('error-message');
        expect(errorText).toBeInTheDocument();
    });
    test('fetch data should be triggered once at initial render', () => {
        render(<App />);

        const fetchDataMock = vi.fn();
        fetchDataMock();

        expect(fetchDataMock).toHaveBeenCalled();
        expect(fetchDataMock).toHaveBeenCalledOnce();
    });
    test('After fetch data trigger images component should appear', () => {
        spyFetch.mockReturnValue({
            isLoading: false,
            isError: false,
            images: initialForty,
            page: 1,
            fetchData: vi.fn(),
        });

        render(<App />);

        const imagesComponent = screen.getByTestId('images-container');
        expect(imagesComponent).toBeInTheDocument();
    });
});
