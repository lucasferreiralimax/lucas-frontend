import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Zoom from './index';

describe('Should render <Zoom/>', () => {
  it('renders simple', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Zoom img={'test/test.jpg'} alt={'Test img'} />
      </I18nextProvider>
    )
    expect(screen.getByTestId('app-zoom')).toBeInTheDocument()
  });
});
