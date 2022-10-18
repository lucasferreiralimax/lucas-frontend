import { render, screen } from '@testing-library/react';
import Footer from './index';

describe("Should render <Footer/>", () => {
  it('renders simple', () => {
    render(<Footer />)
    expect(screen.getByTestId('app-footer')).toBeInTheDocument()
  });
});
