import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import useFetchData from './useFetchData';
import { fetchDataMock } from '../../test/fetchDataMock';

const mockFetch = (state, response) => {
    if (!state) {
        return (window.fetch = vi.fn().mockRejectedValueOnce({
            ok: state,
            json: async () => response,
        }));
    } else {
        return (window.fetch = vi.fn().mockResolvedValueOnce({
            ok: state,
            json: async () => response,
        }));
    }
};

describe('useFetchData hook test', () => {
    test('should fetch data successfully', async () => {
        mockFetch(true, fetchDataMock);

        const { result } = renderHook(() => useFetchData());

        await act(async () => {
            await result.current.fetchData();
        });

        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(false);
        expect(result.current.images).toEqual(fetchDataMock.photos);
    });
    test('it should handle error during data fetching', async () => {
        mockFetch(false, { error: 'Failed to fetch data' });

        const { result } = renderHook(() => useFetchData());

        await act(async () => {
            await result.current.fetchData();
        });

        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(true);
    });
});
