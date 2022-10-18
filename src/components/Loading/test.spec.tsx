import { render, screen } from '@testing-library/react';
import Loading from './index';

describe("Should render <Loading/>", () => {
  it('renders simple', () => {
    render(<Loading />)
    expect(screen.getByTestId('app-loading')).toBeInTheDocument()
  });
});
