import { render, screen } from '@testing-library/react';
import Project from './index';

describe("Should render <Project/>", () => {
  it('renders simple', () => {
    render(
      <Project
        dataTestid='test-1'
        data={{
          translate: 'translate.object',
          url: 'test/test',
          repo: 'test/test',
          photo: 'assts/test'
        }}
      />
    )
    expect(screen.getByTestId('test-1')).toBeInTheDocument()
  });
});
