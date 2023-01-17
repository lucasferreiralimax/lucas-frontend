import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Should render <Footer/>', () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it('renders simple footer', () => {
    expect(screen.getByTestId('app-footer')).toBeInTheDocument()
  });
  it('render text @lucasferreiralimax with year now', () => {
    expect(screen.getByText(`@lucasferreiralimax — ${new Date().getFullYear()}`)).toBeInTheDocument()
  });
});
