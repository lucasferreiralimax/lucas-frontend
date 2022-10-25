import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

import App from '@/App'

function AppWapper() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  );
}

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui)
}

beforeEach(async () => {
  await act(async () => {
    renderWithRouter(<AppWapper />, { route: '/' });
  });
});

describe('App', () => {
  it('renders app-loading', () => {
    expect(screen.getByTestId('app-loading')).toBeInTheDocument();
  });
})
