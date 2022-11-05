import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Header from './index';

describe('Should render <Header/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </I18nextProvider>
    );
  });
  it('renders simple header', () => {
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });
  it('renders navigation', () => {
    expect(screen.getByTestId('app-nav')).toBeInTheDocument();
  });
  it('render title Lucas Ferreira de Lima', () => {
    const title = screen.getByText(/Lucas Ferreira de Lima/i);
    expect(title).toBeInTheDocument();
    expect(title.getAttribute('href')).toBe('/');
  });
  it('render flag Brasil', () => {
    expect(screen.getByRole('img', { name: /Brasil/i })).toBeInTheDocument();
  });
});
