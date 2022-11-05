import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Loading from './index';

describe('Should render <Loading/>', () => {
  it('renders simple', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Loading />
      </I18nextProvider>
    )
    expect(screen.getByTestId('app-loading')).toBeInTheDocument()
  });
});
