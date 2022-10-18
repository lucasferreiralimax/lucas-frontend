import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <h2>🌿 { t('navigation.projects') }</h2>
      <ul>
        <li>
          <a href="https://lucasferreiralimax.github.io/save-our-soul" target="_blank">
            { t('pageProjects.listSOS') }
          </a>
        </li>
        <li>
          <a href="https://criar-curriculo.web.app" target="_blank">
            { t('pageProjects.createCurriculum') }
          </a>
        </li>
        <li>
          <a href="https://detran-simulador.web.app" target="_blank">
            { t('pageProjects.detran') }
          </a>
        </li>
        <li>
          <a href="https://keep-cybernetically.web.app" target="_blank">
            { t('pageProjects.notes') }
          </a>
        </li>
      </ul>
      <h2>📘 { t('pageProjects.facebook.title') }</h2>
      <p>{ t('pageProjects.facebook.description') }</p>
      <ul>
        <li>
          <a href="https://angular-facebook.web.app" target="_blank">
            { t('pageProjects.facebook.old') }
          </a>
        </li>
        <li>
          <a href="https://angular-facebook-new.web.app" target="_blank">
            { t('pageProjects.facebook.new') }
          </a>
        </li>
      </ul>
      <h2>📚 { t('pageProjects.google.title') }</h2>
      <p>{ t('pageProjects.google.description') }</p>
      <ul>
        <li>
          <a href="https://g00gle-reactjs.web.app" target="_blank">
            { t('pageProjects.google.react') }
          </a>
        </li>
        <li>
          <a href="https://g00gle-angular.web.app" target="_blank">
            { t('pageProjects.google.angular') }
          </a>
        </li>
        <li>
          <a href="https://g00gle-vue.web.app" target="_blank">
            { t('pageProjects.google.vue') }
          </a>
        </li>
        <li>
          <a href="https://g00gle-svelte.web.app" target="_blank">
            { t('pageProjects.google.svelte') }
          </a>
        </li>
      </ul>
      <h2>↔️ { t('pageProjects.slide.title') }</h2>
      <p>{ t('pageProjects.slide.description') }</p>
      <ul>
        <li>
          <a href="https://slidecontent-reactjs.web.app" target="_blank">
            { t('pageProjects.slide.react') }
          </a>
        </li>
        <li>
          <a href="https://slidecontent-vuejs.web.app" target="_blank">
            { t('pageProjects.slide.vue') }
          </a>
        </li>
        <li>
          <a href="https://angular-slidecontent.web.app" target="_blank">
            { t('pageProjects.slide.angular') }
          </a>
        </li>
        <li>
          <a href="https://slidecontent-ember.web.app" target="_blank">
            { t('pageProjects.slide.ember') }
          </a>
        </li>
      </ul>
    </>
  )
}

export default Projects
