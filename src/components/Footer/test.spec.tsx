import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Should render <Footer/>', () => {
  beforeEach(async () => {
    render(<Footer />);
  });
  it('renders simple footer', () => {
    expect(screen.getByTestId('app-footer')).toBeInTheDocument()
  });
  it('render text 2022 @lucasferreiralimax', () => {
    expect(screen.getByText('2022 @lucasferreiralimax')).toBeInTheDocument()
  });
});
