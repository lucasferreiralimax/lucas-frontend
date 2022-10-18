import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation';

import './style.scss';

function Header() {
  return (
    <header className="app-header">
      <Navigation />
      <h1 className='name'>
        <Link to="/">
          Lucas Ferreira de Lima
        </Link>
      </h1>
    </header>
  )
}

export default Header
