import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

import Contact from './index';
import contacts from './data';

describe('Should render <Contact/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Contact />
      </I18nextProvider>
    );
  });
  it('renders simple and title', () => {
    expect(screen.getByTestId('app-social')).toBeInTheDocument();
    expect(screen.getByText('pageContact.title')).toBeInTheDocument();
  });
  it('render title document', () => {
    expect(document.title).toBe('Lucas navigation.contact');
  });
  it('render list contacts', () => {

    contacts.forEach(contact => {
      const linkRegex = new RegExp(`Link ${contact.name}`, 'i');
      const linkTest = screen.getAllByRole('link', { name: linkRegex });

      linkTest.forEach(link => {
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe(contact.link);
      });
    });
  });
});
