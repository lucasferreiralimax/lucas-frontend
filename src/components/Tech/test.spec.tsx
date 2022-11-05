import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';

import { TechType } from './types';

import Tech from './index';
import dataTechs from './data';

const techsFilter = ['JavaScript', 'React', 'Vue', 'Angular'];

describe("Should render <Tech/>", () => {
  beforeEach(() => {
    render(<Tech />);
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-tech')).toBeInTheDocument();
  });
  it('render links tech', () => {
    for(let tech of dataTechs) {
      const linkTest = screen.getByTestId(`app-tech-${tech.title.toLocaleLowerCase()}`);

      expect(linkTest).toBeInTheDocument();
      expect(linkTest.getAttribute('href')).toBe(tech.url);
      expect(linkTest.getAttribute('class')).toBe(`app-tech__${tech.title.toLocaleLowerCase()}`);
      expect(linkTest.getAttribute('aria-label')).toBe(`Link ${tech.title}`);
    }
  });
});

describe("Should render <Tech/> with show filter", () => {
  beforeEach(() => {
    render(<Tech show={techsFilter} />);
  });
  it('render links techsFilter', () => {
    const mockTechs = dataTechs.filter((item: TechType) => techsFilter.includes(item.title));

    for(let tech of mockTechs) {
      const linkTest = screen.getByTestId(`app-tech-${tech.title.toLocaleLowerCase()}`);

      expect(linkTest).toBeInTheDocument();
      expect(linkTest.getAttribute('href')).toBe(tech.url);
      expect(linkTest.getAttribute('class')).toBe(`app-tech__${tech.title.toLocaleLowerCase()}`);
      expect(linkTest.getAttribute('aria-label')).toBe(`Link ${tech.title}`);
    }
  });
});
