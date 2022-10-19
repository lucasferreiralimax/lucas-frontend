import { useTranslation } from 'react-i18next';

import { ReactComponent as Linkedin } from '../../assets/linkedin-logo.svg';
import { ReactComponent as Duolingo } from '../../assets/duolingo-logo.svg';
import { ReactComponent as Codepen } from '../../assets/codepen-logo.svg';
import { ReactComponent as Github } from '../../assets/github-logo.svg';
import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg';
import FreeCodeCamp from '../../assets/freecodecamp-logo.png';
import PluralSight from '../../assets/pluralsight-logo.png';

import './style.scss';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{ t('pageContact.title') }</h2>
      <section className='social'>
        <a href="mailto:lucasferreiralimax@gmail.com" target="_blank">
          <EmailIcon className="icon email" />
          <span>lucasferreiralimax@gmail.com</span>
        </a>
        <a href="https://www.duolingo.com/profile/ferreiralimax" target="_blank">
          <Duolingo className="icon duolingo" />
          <span>duolingo.com/profile/ferreiralimax</span>
        </a>
        <a href="https://www.freecodecamp.org/lucasferreiralimax" target="_blank">
          <img width="30" height="30" src={FreeCodeCamp} className="icon freecodecamp" />
          <span>freecodecamp.org/lucasferreiralimax</span>
        </a>
        <a href="https://app.pluralsight.com/profile/lucasferreiralimax" target="_blank">
          <img width="30" height="30" src={PluralSight} className="icon pluralsight" />
          <span>app.pluralsight.com/profile/lucasferreiralimax</span>
        </a>
        <a href="https://codepen.io/lucaslimax" target="_blank">
          <Codepen className="icon codepen" />
          <span>codepen.io/lucaslimax</span>
        </a>
        <a href="https://github.com/lucasferreiralimax" target="_blank">
          <Github className="icon github" />
          <span>github.com/lucasferreiralimax</span>
        </a>
        <a href="https://www.linkedin.com/in/lucasferreiralimax" target="_blank">
          <Linkedin className="icon linkedin" />
          <span>linkedin.com/in/lucasferreiralimax</span>
        </a>
      </section>
    </>
  )
}

export default Contact;
