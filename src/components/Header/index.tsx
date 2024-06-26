import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

import './style.scss';

const Header = () => {
  return (
    <header className='app-header' data-testid='app-header'>
      <Navigation />
      <h1 className='app-header__name'>
        <Link to='/'>
          Lucas Ferreira de Lima
        </Link>
      </h1>
    </header>
  )
}

export default Header;
