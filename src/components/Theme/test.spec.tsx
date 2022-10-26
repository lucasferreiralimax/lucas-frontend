import { act, render, screen } from '@testing-library/react';
import Theme from './index';

describe("Should render <Theme/>", () => {
  beforeEach(() => {
    render(<Theme />);
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-theme')).toBeInTheDocument();
  });
  it('render Dark Mode', () => {
    expect(screen.getByRole('button', { name: /Icon Dark Mode/i })).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    const darkmode = localStorage.getItem('darkmode');
    expect(darkmode == null ? true : JSON.parse(darkmode)).toBeTruthy();
  });
  it('render Light Mode', () => {
    act(() => {
      screen.getByTestId('app-theme').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getByRole('button', { name: /Icon Light Mode/i })).toBeInTheDocument();
    expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();
    const darkmode = localStorage.getItem('darkmode');
    expect(darkmode == null ? true : JSON.parse(darkmode)).toBeFalsy();
  });
  it('render toggle Dark Mode', () => {
    act(() => {
      screen.getByTestId('app-theme').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getByRole('button', { name: /Icon Dark Mode/i })).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    const darkmode = localStorage.getItem('darkmode');
    expect(darkmode == null ? true : JSON.parse(darkmode)).toBeTruthy();
  });
});
