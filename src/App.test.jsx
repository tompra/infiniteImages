import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, test } from 'vitest';

describe('App test', () => {
    test('Should show title', () => {
        render(
            <App title='Hello World'>
                <h1>Content</h1>
            </App>
        );
        expect(screen.getByText(/Hello World/i)).toBeDefined();
    });
});
