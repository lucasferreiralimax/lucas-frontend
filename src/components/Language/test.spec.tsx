import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import Language from './index';
import i18n from '@/i18n';

describe("Should render <Language/>", () => {
  it('renders simple', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Language />
        </BrowserRouter>
      </I18nextProvider>
    )
    expect(screen.getByTestId('app-language')).toBeInTheDocument()
  });
});
