import { render, screen } from '@testing-library/react';
import Tech from './index';

describe("Should render <Tech/>", () => {
  it('renders simple', () => {
    render(<Tech />)
    expect(screen.getByTestId('app-tech')).toBeInTheDocument()
  });
});
