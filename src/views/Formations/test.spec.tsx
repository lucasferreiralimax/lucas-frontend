import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Formations from './index';

import formations from './data';

describe('Should render <Formations/>', () => {
  beforeEach(() => {
    render(<Formations />);
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-formations')).toBeInTheDocument();
    expect(screen.getByText('📚 navigation.formation')).toBeInTheDocument();
  });
  it('render title document', () => {
    expect(document.title).toBe('Lucas navigation.formation');
  });
  it('render list formations', () => {

    formations.forEach((formation, index) => {
      const projectElement = screen.getByTestId(`app-formation-${++index}`);
      const projectPhoto = screen.getByAltText(`${formation.translate}.title`);
      const linkRegex = new RegExp(`Link ${formation.translate}.title`, 'i');
      const linkTest = screen.getAllByRole('link', { name: linkRegex });

      expect(projectElement).toBeInTheDocument();
      expect(projectPhoto).toBeInTheDocument();
      expect(projectPhoto).toHaveAttribute('src', formation.photo);

      linkTest.forEach(link => {
        expect(link).toBeInTheDocument();

        if(link.getAttribute('href') !== null) {
          expect(link.getAttribute('href')).toBe(formation.url);
        }
      });
    });
  });
});
