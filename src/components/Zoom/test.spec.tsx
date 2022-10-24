import { render, screen } from '@testing-library/react';
import Zoom from './index';

describe("Should render <Zoom/>", () => {
  it('renders simple', () => {
    render(<Zoom img={'test/test.jpg'} alt={'Test img'} />)
    expect(screen.getByTestId('app-zoom')).toBeInTheDocument()
  });
});
