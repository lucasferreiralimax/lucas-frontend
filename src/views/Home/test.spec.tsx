import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Should render <Home/>', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders simple', () => {
    expect(screen.getByTestId('app-home')).toBeInTheDocument();
  });
  it('render title document', () => {
    expect(document.title).toBe('Lucas Front-end');
  });
  it('render photo-profile', () => {
    const photo = screen.getByAltText('Lucas Ferreira de Lima');
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute('src', '/src/assets/lucaslucas.jpg');
    expect(photo).toHaveAttribute('class', 'app-profile__photo');
    expect(photo).toHaveAttribute('width', '250');
  });
  it('render translates paragraphs', () => {
    // paragraphOne
    expect(screen.getByText(/pageHome.paragraphOne.textOne/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphOne.textTwo/i)).toBeInTheDocument();

    // paragraphTwo
    expect(screen.getByText(/pageHome.paragraphTwo.textOne/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphTwo.textTwo/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphTwo.textThree/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphTwo.textFour/i)).toBeInTheDocument();

    // paragraphThree
    expect(screen.getByText(/pageHome.paragraphThree.textOne/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphThree.textTwo/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphThree.textThree/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphThree.textFour/i)).toBeInTheDocument();

    // paragraphFour
    expect(screen.getByText(/pageHome.paragraphFour.textOne/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphFour.textTwo/i)).toBeInTheDocument();
    expect(screen.getByText(/pageHome.paragraphFour.textThree/i)).toBeInTheDocument();
  });
});
