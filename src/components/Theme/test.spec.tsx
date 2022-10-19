import { render, screen } from '@testing-library/react';
import Theme from './index';

describe("Should render <Theme/>", () => {
  it('renders simple', () => {
    render(<Theme />)
    expect(screen.getByTestId('app-theme')).toBeInTheDocument()
  });
});
