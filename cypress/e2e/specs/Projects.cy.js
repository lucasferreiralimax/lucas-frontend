import projects from '../../fixtures/projects';

describe('Test render projects page', () => {
  it('Render header with Brasil, Lucas and link /', () => {
    cy.visit('/projects')
    cy.get('.app-header__name a').invoke('attr', 'href').should('contain', '/')
    cy.get('[aria-label="Brasil"]').should('exist')
    cy.contains('.app-header__name', 'Lucas Ferreira de Lima')
  })
})

describe('Test render projects page', () => {
  for(let [index, project] of projects.entries()) {
    it(`Render project ${project.name}`, () => {
      const item = cy.get(`.app-project:nth-of-type(${++index})`)

      item.should('exist')
      item.get('.app-zoom').should('exist')
      item.get('.app-tech').should('exist')
      item.get('.app-project__actions').should('exist')

      for(let tech of project.techs) {
        item.get(`[data-testid=app-tech-${tech.toLocaleLowerCase()}]`).should('exist')
      }
    })
  }
})

describe('Test render projects footer', () => {
  it('Render footer', () => {
    cy.get('.app-footer').should('exist')
    cy.get('.app-footer').contains('2022 @lucasferreiralimax')
  })
})

describe('Test render projects page languages', () => {
  it('Render English', () => {
    cy.get('.app-language').select('en')
    cy.wait(1000)
    cy.contains('Projects')

    cy.contains('Contact Prevention of Life')
    cy.contains('Project with listing of international contacts for life prevention, written with pure JavaScript, HTML and CSS')

    cy.contains('Project Create Curriculum')
    cy.contains('This web application is a social action and helps peoples to create a professional, elegant curriculum in a simple and objective')

    cy.contains('Detran Simulator')
    cy.contains('This social project to help peoples prepare for a test with questions about Brazilian traffic laws Constructed in a simple objective to helper every Brazilian citizen for preparation exam')

    cy.contains('Web Note Application Svelte')
    cy.contains('Notes interface created with Svelte, Pug.js and Stylus Examples of notes saved in localStorage with responsive design and darkmode Button with animations and modal transitions')

    cy.contains('Wallet Digitalz')
    cy.contains('Wallet Digitalz application is for help to manager your money expenses and investiments')

    cy.contains('Interface Facebook with Angular')
    cy.contains('Notes interface created with Svelte, Pug.js and Stylus Examples of notes saved in localStorage with responsive design and darkmode Button with animations and modal transitions')

    cy.contains('Interface New Facebook with Angular')
    cy.contains('Clone of the new Facebook interface with Angular Darkmode and Responsive Design')

    cy.contains('Web Chat Vue')
    cy.contains('Web chat interface written with Vue.js With responsive and custom login page language internalization unitary tests and e2e tests')

    cy.contains('SlideContent with React.js')
    cy.contains('Content slide written with React.js Infinite Slide Mode, Slide without navigation buttons Slide with timer and language internalization')

    cy.contains('SlideContent with Vue.js')
    cy.contains('Content slide written with Vue.js Infinite Slide Mode, Slide without navigation buttons Slide with timer and language internalization')

    cy.contains('SlideContent with Angular')
    cy.contains('Content slide written with Angular Infinite Slide Mode, Slide without navigation buttons Slide with timer')

    cy.contains('SlideContent with Ember.js')
    cy.contains('Content slide written with Ember.js Infinite Slide Mode, Slide without navigation buttons Slide with timer and language internalization')

    cy.contains('Google interface with React.js')
    cy.contains('Google UI clone written with React.js With virtual keyboard, darkmode, language internalization Speech recognition, unit tests and e2e tests')

    cy.contains('Google interface with Angular')
    cy.contains('Google UI clone written with Angular With virtual keyboard, darkmode Speech recognition, unit tests')

    cy.contains('Google interface with Vue.js')
    cy.contains('Google UI clone written with Vue.js With virtual keyboard, darkmode, language internalization Speech recognition, unit tests and e2e tests')

    cy.contains('Google interface with Svelte')
    cy.contains('Google UI clone written with Angular With virtual keyboard, darkmode Speech recognition, unit tests')
  })
  it('Render Portuguese Brazilian', () => {
    cy.get('.app-language').select('pt')
    cy.wait(1000)
    cy.contains('Projetos')

    cy.contains('Contatos de Prevenção a Vida')
    cy.contains('Projeto com listagem de contatos internacionais para prevenção a vida, escrito do zero com JavaScript puro')

    cy.contains('Projeto Criar Currículo')
    cy.contains('Esse web aplicativo é uma ação social e auxilia as pessoas a criar um curriculo profissional, elegante, de uma forma simples e objetiva')

    cy.contains('Detran Simulador')
    cy.contains('Esse projeto social tem o intuito de ajudar as pessoas a se preparar para uma prova com questões sobre leis de trânsito brasileira Construído de uma forma simples para atingir todo cidadão brasileiro e ajudar em seu momento de preparo')

    cy.contains('Wallet Digitalz')
    cy.contains('O aplicativo Wallet Digitalz é para ajudar a gerenciar seu dinheiro despesas e investimentos')

    cy.contains('Web Aplicativo de Notas com Svelte')
    cy.contains('Interface de notas criada com Svelte, Pug.js e Stylus Exemplos de notas gravadas no localStorage com design responsivo e darkmode Animações nos botões e transições no modais')

    cy.contains('Facebook com Angular')
    cy.contains('Clone da interface antiga do Facebook com Angular')

    cy.contains('Novo Facebook com Angular')
    cy.contains('Clone da interface nova do Facebook com Angular Darkmode e Design Responsivo')

    cy.contains('Web Chat Vue')
    cy.contains('Interface de chat web escrito com Vue.js Com responsividade e página de login personalizada internalização de idiomas testes unitários e testes e2e')

    cy.contains('SlideContent com React.js')
    cy.contains('Slide de conteúdo escrito com React.js Modo Slide infinito, Slide sem botões de navegação Slide com temporizador e internalização de idiomas')

    cy.contains('SlideContent com Vue.js')
    cy.contains('Slide de conteúdo escrito com Vue.js Modo Slide infinito, Slide sem botões de navegação Slide com temporizador e internalização de idiomas')

    cy.contains('SlideContent com Angular')
    cy.contains('Slide de conteúdo escrito com Angular Modo Slide infinito, Slide sem botões de navegação Slide com temporizador')

    cy.contains('SlideContent com Ember.js')
    cy.contains('Slide de conteúdo escrito com Ember.js Modo Slide infinito, Slide sem botões de navegação Slide com temporizador e internalização de idiomas')

    cy.contains('Interface Google com React.js')
    cy.contains('Clone da interface do Google escrito com React.js Com teclado virtual, darkmode, internalização de idiomas Reconhecimento de voz, testes unitários e testes e2e')

    cy.contains('Interface Google com Angular')
    cy.contains('Clone da interface do Google escrito com Angular Com teclado virtual, darkmode Reconhecimento de voz, testes unitários')

    cy.contains('Interface Google com Vue.js')
    cy.contains('Clone da interface do Google escrito com Vue.js Com teclado virtual, darkmode, internalização de idiomas Reconhecimento de voz, testes unitários e testes e2e')

    cy.contains('Interface Google com Svelte')
    cy.contains('Clone da interface do Google escrito com Svelte Com teclado virtual, darkmode Reconhecimento de voz, testes unitários')
  })
  it('Render Spanish', () => {
    cy.get('.app-language').select('es')
    cy.wait(1000)
    cy.contains('Proyectos')

    cy.contains('Contactos Prevención de la Vida')
    cy.contains('Proyecto con listado de contactos internacionales para la prevención de la vida, escrito desde cero con puro JavaScript')

    cy.contains('Proyecto Crear Currículum')
    cy.contains('Esta aplicación web es una acción social y ayuda a las personas a crear un plan de estudios elegante y profesional de una manera simple y objetiva.')

    cy.contains('Detran Simulador')
    cy.contains('Este proyecto social tiene como objetivo ayudar a las personas a prepararse para un examen con preguntas sobre las leyes de tránsito de Brasil Construido de manera simple para llegar a todos los ciudadanos brasileños y ayudarlos en su tiempo de preparación')

    cy.contains('Wallet Digitalz')
    cy.contains('La aplicación Wallet Digitalz es una ayuda para administrar su dinero gastos e inversiones')

    cy.contains('Aplicación de notas con Svelte')
    cy.contains('Interfaz de notas creada con Svelte, Pug.js y Stylus Ejemplos de notas grabadas en localStorage con diseño receptivo y modo oscuro Animaciones de botones y transiciones modales')

    cy.contains('Facebook con Angular')
    cy.contains('Clon de la antigua interfaz de Facebook con Angular')

    cy.contains('Facebook Nuevo con Angular')
    cy.contains('Clon de la nueva interfaz de Facebook con Angular Darkmode y Responsive Design')

    cy.contains('Web Chat Vue')
    cy.contains('Interfaz de chat web escrita con Vue.js Con design responsiva y página de inicio de sesión personalizada internalización de idiomas pruebas unitarias y pruebas e2e')

    cy.contains('SlideContent con React.js')
    cy.contains('Slide de contenido escrita con React.js Infinite Slide Mode, Slide sin botones de navegación Slide con temporizador e internalización de idioma')

    cy.contains('SlideContent con Vue.js')
    cy.contains('Slide de contenido escrita con Vue.js Infinite Slide Mode, Slide sin botones de navegación Slide con temporizador e internalización de idioma')

    cy.contains('SlideContent con Angular')
    cy.contains('Slide de contenido escrita con Angular Infinite Slide Mode, Slide sin botones de navegación Slide con temporizador')

    cy.contains('SlideContent con Ember.js')
    cy.contains('Slide de contenido escrita con Ember.js Infinite Slide Mode, Slide sin botones de navegación Slide con temporizador e internalización de idioma')

    cy.contains('Interfaz Google con React.js')
    cy.contains('Clon de la interfaz de usuario de Google escrito con React.js Con teclado virtual, modo oscuro, internalización del idioma Reconocimiento de voz, pruebas unitarias y pruebas e2e')

    cy.contains('Interfaz Google con Angular')
    cy.contains('Clon de la interfaz de usuario de Google escrito con Angular Con teclado virtual, modo oscuro Reconocimiento de voz, pruebas unitarias')

    cy.contains('Interfaz Google con Vue.js')
    cy.contains('Clon de la interfaz de usuario de Google escrito con Vue.js Con teclado virtual, modo oscuro, internalización del idioma Reconocimiento de voz, pruebas unitarias y pruebas e2e')

    cy.contains('Interfaz Google con Svelte')
    cy.contains('Clon de la interfaz de usuario de Google escrito con Svelte Con teclado virtual, modo oscuro Reconocimiento de voz, pruebas unitarias')
  })
})
