import { vi } from 'vitest';

export class IntersectionObserverMock {
    constructor(handleObserver) {
        this.observe = vi.fn((element) => {
            this.observeElement(element, handleObserver);
        });
        this.unobserve = vi.fn((element) => {
            this.unobserveElement(element);
        });
    }

    observeElement(element, handleObserver) {
        observerMap.set(element, handleObserver);
        instanceMap.set(element, this);
    }

    unobserveElement(element) {
        observerMap.delete(element);
        instanceMap.delete(element);
    }
}

const observerMap = new Map();
const instanceMap = new Map();

export const intersect = (element, isIntersecting) => {
    const handleObserver = observerMap.get(element);
    if (handleObserver) {
        handleObserver([
            {
                isIntersecting,
                target: element,
            },
        ]);
    }
};

export const getObserverOf = (element) => instanceMap.get(element);

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
