import { useTranslation } from 'react-i18next';

import './App.scss'

import { ReactComponent as Linkedin } from './assets/linkedin-logo.svg'
import { ReactComponent as Duolingo } from './assets/duolingo-logo.svg'
import { ReactComponent as Codepen } from './assets/codepen-logo.svg'
import { ReactComponent as Github } from './assets/github-logo.svg'

import Language from './components/Language'

function App() {
  const { t } = useTranslation();

  return (
    <div className='app'>
      <Language />
      <h1 className='name'>Lucas Ferreira de Lima</h1>
      <p>
        {t('pageHome.paragraphOne.textOne')}<br/>
        {t('pageHome.paragraphOne.textTwo')}
      </p>
      <p>
        {t('pageHome.paragraphTwo.textOne')}<br/>
        {t('pageHome.paragraphTwo.textTwo')}<br/>
        {t('pageHome.paragraphTwo.textThree')}
      </p>

      <p>
        {t('pageHome.paragraphThree.textOne')}<br/>
        {t('pageHome.paragraphThree.textTwo')}<br/>
        {t('pageHome.paragraphThree.textThree')}<br/>
        {t('pageHome.paragraphThree.textFour')}
      </p>

      <p>
        {t('pageHome.paragraphFour.textOne')}<br/>
        {t('pageHome.paragraphFour.textTwo')}<br/>
        {t('pageHome.paragraphFour.textThree')}
      </p>
      
      <section className='social'>
        <a href="https://www.linkedin.com/in/lucasferreiralimax" target="_blank">
          <Linkedin className="icon linkedin" />
        </a>
        <a href="https://www.duolingo.com/profile/ferreiralimax" target="_blank">
          <Duolingo className="icon duolingo" />
        </a>
        <a href="https://codepen.io/lucaslimax" target="_blank">
          <Codepen className="icon codepen" />
        </a>
        <a href="https://github.com/lucasferreiralimax" target="_blank">
          <Github className="icon github" />
        </a>
      </section>
    </div>
  )
}

export default App
