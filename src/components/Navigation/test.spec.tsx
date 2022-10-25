import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Navigation from './index';

describe('Should render <Navigation/>', () => {
  it('renders simple', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </I18nextProvider>
    )
    expect(screen.getByTestId('app-nav')).toBeInTheDocument()
  });
});
