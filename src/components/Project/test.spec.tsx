import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Project from './index';

describe('Should render <Project/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Project
          dataTestid='test-1'
          data={{
            translate: 'translate.object',
            url: 'https://test.link',
            repo: 'https://test.repo',
            photo: 'assets/test'
          }}
        />
      </I18nextProvider>
    );
  });
  it('renders simple', () => {
    expect(screen.getByTestId('test-1')).toBeInTheDocument()
  });
  it('render component app-zoom', () => {
    expect(screen.getByTestId('app-zoom')).toBeInTheDocument()
  });
  it('render text title', () => {
    expect(screen.getByText(/translate.object.title/i)).toBeInTheDocument();
  });
  it('render text description', () => {
    expect(screen.getByText(/translate.object.description/i)).toBeInTheDocument();
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
      expect(link.getAttribute('href')).toBe('https://test.link');
    });
  });
  it('render link repo test', () => {
    const linkTest = screen.getAllByRole('link', { name: /Github translate.object.title/i });

    linkTest.forEach(link => {
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe('https://test.repo');
    });
  });
});
