import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Navigation from './index';

describe("Should render <Navigation/>", () => {
  it('renders simple', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    expect(screen.getByTestId('app-nav')).toBeInTheDocument()
  });
});
