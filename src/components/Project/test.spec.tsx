import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Project from './index';

describe('Should render <Project/>', () => {
  it('renders simple', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Project
          dataTestid='test-1'
          data={{
            translate: 'translate.object',
            url: 'test/test',
            repo: 'test/test',
            photo: 'assts/test'
          }}
        />
      </I18nextProvider>
    )
    expect(screen.getByTestId('test-1')).toBeInTheDocument()
  });
});
