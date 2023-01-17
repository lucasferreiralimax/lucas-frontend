import './style.scss';

const Footer = () => {
  return (
    <footer className='app-footer' data-testid='app-footer'>
       <small>@lucasferreiralimax — { new Date().getFullYear() }</small>
    </footer>
  )
}

export default Footer;
