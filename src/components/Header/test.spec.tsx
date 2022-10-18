import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from './index';

describe("Should render <Header/>", () => {
  it('renders simple', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByTestId('app-header')).toBeInTheDocument()
  });
});
