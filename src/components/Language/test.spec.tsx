import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import Language from './index';
import i18n from '@/i18n';

describe('Should render <Language/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Language />
      </I18nextProvider>
    );
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-language')).toBeInTheDocument();
  });
  it('render option pt', () => {
    expect(screen.getByText(/pt-BR/i)).toBeInTheDocument();
  });
  it('render option es', () => {
    expect(screen.getByText(/es-ES/i)).toBeInTheDocument();
  });
  it('render option en', () => {
    expect(screen.getByText(/en-US/i)).toBeInTheDocument();
  });
  it('render option ru', () => {
    expect(screen.getByText(/ru-RU/i)).toBeInTheDocument();
  });
  it('render option zh', () => {
    expect(screen.getByText(/zh-CN/i)).toBeInTheDocument();
  });
});
