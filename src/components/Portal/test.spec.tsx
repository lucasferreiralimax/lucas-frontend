import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Portal from './index';

describe('Should render <Portal/>', () => {
  beforeEach(() => {
    render(<Portal />);
  });
  it('renders simple Portal', () => {
    expect(screen.getByTestId('app-portal')).toBeInTheDocument();
  });
  it('renders validation class root-portal', () => {
    expect(screen.getByTestId('app-portal')).toHaveAttribute('class', 'root-portal');
  });
});
