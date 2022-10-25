import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Language from './index';
import i18n from '@/i18n';

describe('Should render <Language/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Language />
        </BrowserRouter>
      </I18nextProvider>
    );
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-language')).toBeInTheDocument();
  });
  it('render option pt', () => {
    const language = screen.getByText(/languages.pt/i);
    expect(language).toBeInTheDocument();
    expect(language.getAttribute('value')).toBe('pt');
  });
  it('render option es', () => {
    const language = screen.getByText(/languages.es/i);
    expect(language).toBeInTheDocument();
    expect(language.getAttribute('value')).toBe('es');
  });
  it('render option en', () => {
    const language = screen.getByText(/languages.en/i);
    expect(language).toBeInTheDocument();
    expect(language.getAttribute('value')).toBe('en');
  });
});
