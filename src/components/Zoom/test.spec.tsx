import { describe, expect, it, beforeEach } from 'vitest'
import { act, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Zoom from './index';

describe('Should render <Zoom/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Zoom
          img={'assets/test.jpg'}
          alt={'Test img'}
          size={{
            width: '50%',
            height: '50%'
          }}
        />
      </I18nextProvider>
    );
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-zoom')).toBeInTheDocument();
  });
  it('renders render content', () => {
    expect(screen.getByTestId('app-zoom__content')).toBeInTheDocument();
  });
  it('render alt Test img', () => {
    expect(screen.getByAltText('Test img')).toBeInTheDocument();
  });
  it('render src assets/test.jpg', () => {
    expect(screen.getByAltText('Test img')).toHaveAttribute('src', 'assets/test.jpg');
  });
  it('render size img', () => {
    expect(screen.getByAltText('Test img')).toHaveAttribute('width', '50%');
    expect(screen.getByAltText('Test img')).toHaveAttribute('height', '50%');
  });
  it('render click Zoom active', () => {
    expect(screen.getByTestId('app-zoom__content')).toHaveAttribute('class', 'app-zoom__content');
    expect(document.body.style.overflow).toBe('');

    act(() => {
      screen.getByTestId('app-zoom__content').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(screen.getByTestId('app-zoom__content')).toBeInTheDocument();
    expect(screen.getByTestId('app-zoom__content')).toHaveAttribute('class', 'app-zoom__content active');
    expect(document.body.style.overflow).toBe('hidden');
  });
});
