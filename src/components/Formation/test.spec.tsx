import { render, screen } from '@testing-library/react';
import Formation from './index';

describe("Should render <Formation/>", () => {
  it('renders simple', () => {
    render(
      <Formation
        dataTestid='test-1'
        data={{
          translate: 'translate.object',
          url: 'test/test',
          date: {
            start: '2022'
          },
          photo: 'assts/test'
        }}
      />
    )
    expect(screen.getByTestId('test-1')).toBeInTheDocument()
  });
});
