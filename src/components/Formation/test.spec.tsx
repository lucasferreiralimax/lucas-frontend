import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Formation from './index';

describe('Should render <Formation/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Formation
          dataTestid='test-1'
          data={{
            translate: 'translate.object',
            url: 'test.test',
            date: {
              start: '2022'
            },
            photo: 'assets/test'
          }}
        />
      </I18nextProvider>
    );
  });
  it('renders simple Formation test-1', () => {
    expect(screen.getByTestId('test-1')).toBeInTheDocument();
  });
  it('render text title', () => {
    expect(screen.getByText(/translate.object.title/i)).toBeInTheDocument();
  });
  it('render text description', () => {
    expect(screen.getByText(/translate.object.description/i)).toBeInTheDocument();
  });
  it('render text 2022', () => {
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
  });
  it('render alt translate.object.title', () => {
    expect(screen.getByAltText('translate.object.title')).toBeInTheDocument();
  });
  it('render valid src assets', () => {
    expect(screen.getByAltText('translate.object.title')).toHaveAttribute('src', 'assets/test');
  });
  it('render link test', () => {
    const linkTest = screen.getAllByRole('link', { name: /Link translate.object.title/i });

    linkTest.forEach(link => {
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe('http://test.test');
    });
  });
});
