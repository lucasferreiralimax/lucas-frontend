import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

import listNavigation from './data';
import Navigation from './index';

describe('Should render <Navigation/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </I18nextProvider>
    );
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-nav')).toBeInTheDocument();
  });
  it('render language', () => {
    expect(screen.getByTestId('app-language')).toBeInTheDocument();
  });
  it('render theme', () => {
    expect(screen.getByTestId('app-theme')).toBeInTheDocument();
  });
  it('render title', () => {
    const title = screen.getByText(/navigation.title/i);
    expect(title).toBeInTheDocument();
    expect(title.getAttribute('class')).toBe('app-nav__title');
  });
  it('renders button menu', () => {
    expect(screen.getByRole('button', { name: /menu.arial_label.menu_button/i })).toBeInTheDocument();
  });
  it('render links navigation', () => {
    const linkTest = screen.getAllByRole('link');

    linkTest.forEach((link, index) => {
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe(listNavigation[index].url);
      expect(link.getAttribute('aria-label')).toBe(`Link navigation.${listNavigation[index].name}`);
    });
  });
});
