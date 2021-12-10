import { render, screen } from '@testing-library/react';
import Crypto from '../pages/Crypto';

test('Render crypto page', () => {
    render(<Crypto />);
});
