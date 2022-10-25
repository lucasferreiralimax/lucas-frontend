import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Header from './index';

describe('Should render <Header/>', () => {
  it('renders simple', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </I18nextProvider>
    )
    expect(screen.getByTestId('app-header')).toBeInTheDocument()
  });
});
