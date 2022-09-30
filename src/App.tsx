import { useTranslation } from 'react-i18next';

import './App.scss'

import linkedinLogo from './assets/linkedin-logo.svg'
import duolingoLogo from './assets/duolingo-logo.svg'
import codepenLogo from './assets/codepen-logo.svg'
import githubLogo from './assets/github-logo.svg'

function App() {
  const { t } = useTranslation();

  return (
    <div className='app'>
      <select
        className="App-language"
        name="language"
        value={store.lang}
        onChange={e => dispatch({type: 'SET_LANG', payload: e.target.value})}
      >
        <option value="pt">{t('languages.pt')}</option>
        <option value="en">{t('languages.en')}</option>
        <option value="es">{t('languages.es')}</option>
        <option value="fr">{t('languages.fr')}</option>
      </select>
      <h1 className='name'>Lucas Ferreira de Lima</h1>
      <p>Desenvolvedor Front-end e Designer especialista em criar soluções tecnológicas nos padrões Web<br/>
      I study English, J'étudie Français, Yo estudio Espanol e falo Português.</p>

      <p>Desenvolvendo sempre soluções com as seguintes tecnologias: CSS, HTML, JavaScript<br/>
      Webpack, Gulp.js, Grunt.js, ParcelJS, Cypress.io, jQuery, Quasar.js, Nuxt.js, Typescript, ES6<br/>
      React.js e os Framework Angular, Vue.js e Svelte.js</p>

      <p>Utilizo o Git como versionador de código e o github, bitbucket, gitlab<br/>
      O pré-processador Stylus para trabalhar o CSS, também trabalho com Less e Sass<br/>
      Buscando sempre desenvolver e escrever um HTML semântico em sua última versão<br/>
      Utilizando o máximo que a linguagem oferecer, também utilizo o Pug.js como template</p>

      <p>Meu foco é a melhoria da informação com performance trazendo qualidade e inovação<br/>
      Criando testes End-to-End usando Cypress.io, gerando resultados positivos nos projetos<br/>
      Fazendo pesquisas e testes de usabilidade, melhorando a experiência com animações em CSS</p>

      <p>Desenvolvo minhas habilidades artísticas dentro e fora da tecnologia<br/>
      Escrevendo poesia e também criando desenhos e artes visuais (arte urbana)</p>
      <section className='social'>
        <a href="https://www.linkedin.com/in/lucasferreiralimax" target="_blank">
          <img src={linkedinLogo} alt="Linkedin Lucas Ferreira de Lima" width="50" height="50" />
        </a>
        <a href="https://www.duolingo.com/profile/ferreiralimax" target="_blank">
          <img src={duolingoLogo} alt="Duolingo Lucas Ferreira de Lima" width="50" height="50" />
        </a>
        <a href="https://codepen.io/lucaslimax" target="_blank">
          <img src={codepenLogo} alt="Codepen Lucas Ferreira de Lima" width="50" height="50" />
        </a>
        <a href="https://github.com/lucasferreiralimax" target="_blank">
          <img src={githubLogo} alt="Github Lucas Ferreira de Lima" width="50" height="50" />
        </a>
      </section>
    </div>
  )
}

export default App
