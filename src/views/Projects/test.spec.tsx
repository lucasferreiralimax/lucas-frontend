import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

import Projects from './index';
import projects from './data';

describe('Should render <Projects/>', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projects />
      </I18nextProvider>
    );
  });
  it('renders simple and title', () => {
    expect(screen.getByTestId('app-projects')).toBeInTheDocument();
    expect(screen.getByText('🌿 navigation.projects')).toBeInTheDocument();
  });
  it('render title document', () => {
    expect(document.title).toBe('Lucas navigation.projects');
  });
  it('render list projects', () => {

    projects.forEach((project, index) => {
      const projectElement = screen.getByTestId(`app-project-${++index}`);
      const projectPhoto = screen.getByAltText(`${project.translate}.title`);
      const linkRegex = new RegExp(`Link ${project.translate}.title`, 'i');
      const repoRegex = new RegExp(`Github ${project.translate}.title`, 'i');
      const linkTest = screen.getAllByRole('link', { name: linkRegex });
      const repoTest = screen.getAllByRole('link', { name: repoRegex });

      expect(projectElement).toBeInTheDocument();
      expect(projectPhoto).toBeInTheDocument();
      expect(projectPhoto).toHaveAttribute('src', project.photo);

      linkTest.forEach(link => {
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe(project.url);
      });

      repoTest.forEach(repo => {
        expect(repo).toBeInTheDocument();
        expect(repo.getAttribute('href')).toBe(project.repo);
      });
    });
  });
});
