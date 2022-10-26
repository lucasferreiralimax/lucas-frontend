import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Formations from './index';

describe('Should render <Formations/>', () => {
  beforeEach(() => {
    render(<Formations />);
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-formations')).toBeInTheDocument();
  });
  it('render title document', () => {
    expect(document.title).toBe('Lucas navigation.formation');
  });
});
