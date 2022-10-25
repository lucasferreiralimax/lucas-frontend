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

describe('App', () => {
  beforeEach(async () => {
    await act(async () => {
      renderWithRouter(<AppWapper />, { route: '/' });
    });
  });
  it('renders app-loading', async () => {
    let loading = await screen.findByTestId('app-loading');
    expect(loading).toBeInTheDocument();
  });
  it('renders app-container', async () => {
    let container = await screen.findByTestId('app-container');
    expect(container).toBeInTheDocument();
  });
  it('renders app-header', async () => {
    let header = await screen.findByTestId('app-header');
    expect(header).toBeInTheDocument();
  });
  it('renders app-footer', async () => {
    let footer = await screen.findByTestId('app-footer');
    expect(footer).toBeInTheDocument();
  });
});

describe('App Routes Test View', () => {
  it('renders app-home', async () => {
    renderWithRouter(<AppWapper />, { route: '/' });
    let home = await screen.findByTestId('app-home');
    expect(home).toBeInTheDocument();
  });
  it('renders app-projects', async () => {
    renderWithRouter(<AppWapper />, { route: '/projects' });
    let projects = await screen.findByTestId('app-projects');
    expect(projects).toBeInTheDocument();
  });
  it('renders app-formations', async () => {
    renderWithRouter(<AppWapper />, { route: '/formation' });
    let formations = await screen.findByTestId('app-formations');
    expect(formations).toBeInTheDocument();
  });
  it('renders app-social', async () => {
    renderWithRouter(<AppWapper />, { route: '/contact' });
    let social = await screen.findByTestId('app-social');
    expect(social).toBeInTheDocument();
  });
});
