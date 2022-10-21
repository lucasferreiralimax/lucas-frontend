import { render, screen } from '@testing-library/react';
import Formation from './index';

describe("Should render <Formation/>", () => {
  it('renders simple', () => {
    render(
      <Formation
        dataTestid='test-1'
        data={{
          title: 'Test',
          description: 'Description test',
          url: 'test/test',
          photo: 'assts/test'
        }}
      />
    )
    expect(screen.getByTestId('test-1')).toBeInTheDocument()
  });
});
