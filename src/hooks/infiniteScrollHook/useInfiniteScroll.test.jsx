import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import useInfiniteScroll from './useInfiniteScroll';
import { IntersectionObserverMock } from '../../test/intersectionObserverMock';
import { getObserverOf, intersect } from '../../test/intersectionObserverMock';
import PropTypes from 'prop-types';

window.IntersectionObserver = IntersectionObserverMock;

const Observe = ({ fetchData }) => {
    const { observeRef } = useInfiniteScroll(fetchData);
    return <div data-testid='observeRef' ref={observeRef}></div>;
};

describe('useInfiniteScroll hook test', () => {
    const fetchData = vi.fn();
    test('creates an observer', () => {
        render(<Observe fetchData={fetchData} />);
        const observeRef = screen.getByTestId('observeRef');
        const instance = getObserverOf(observeRef);

        expect(instance.observe).toHaveBeenCalledWith(observeRef);
    });
    test('does not call the fetchData function without intersection', () => {
        render(<Observe fetchData={fetchData} />);
        const observeRef = screen.getByTestId('observeRef');

        intersect(observeRef, false);

        expect(fetchData).not.toHaveBeenCalled();
    });
    test('calls the fetchData function on intersection', () => {
        render(<Observe fetchData={fetchData} />);
        const observeRef = screen.getByTestId('observeRef');
        intersect(observeRef, true);

        expect(fetchData).toHaveBeenCalledTimes(1);
    });
});

Observe.propTypes = {
    fetchData: PropTypes.func,
};
