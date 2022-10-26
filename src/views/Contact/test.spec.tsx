import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Contact from './index';

describe('Should render <Contact/>', () => {
  beforeEach(() => {
    render(<Contact />);
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-social')).toBeInTheDocument();
  });
  it('render title document', () => {
    expect(document.title).toBe('Lucas navigation.contact');
  });
});
