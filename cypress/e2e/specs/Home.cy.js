import techs from '../../fixtures/techs';

describe('Test render home page', () => {
  it('Render header with Brasil, Lucas and link /', () => {
    cy.visit('/')
    cy.get('.app-header__name a').invoke('attr', 'href').should('contain', '/')
    cy.get('[aria-label="Brasil"]').should('exist')
    cy.contains('.app-header__name', 'Lucas Ferreira de Lima')
  })
  it('Render photo profile', () => {
    cy.get('.app-profile__photo').should('exist')
    cy.get('.app-profile__photo').invoke('attr', 'alt').should('contain', 'Lucas Ferreira de Lima')
    cy.get('.app-profile__photo').invoke('attr', 'src').should('contain', '/src/assets/lucaslucas.jpg')
  })
})

describe('Test render home page list techs', () => {
  for(let tech of techs) {
    it(`Render tech ${tech.title}`, () => {
      const item = cy.get(`[data-testid=app-tech-${tech.title.toLocaleLowerCase()}]`)

      item.should('exist');
      item.invoke('attr', 'href').should('contain', tech.url);
    })
  }
})

describe('Test render home page languages', () => {
  it('Render English', () => {
    cy.get('.app-language').select('en')
    cy.wait(1000)
    cy.contains('Front-end Programmer and Designer specialist in creating technological solutions with Web standards')
    cy.contains('I study English, Spanish and speak brazilian portuguese')
    cy.contains('Always developing solutions with technologies: CSS, HTML, JavaScript')
    cy.contains('React.js and the Framework\'s Angular, Vue.js, and Svelte.js')
    cy.contains('Webpack, Gulp.js, Grunt.js, ParcelJS, Cypress.io, Quasar.js, Nuxt.js, Typescript, ES6')
    cy.contains('Working with unit tests in Vitest, Jest and Karma')
    cy.contains('I use Git as code versioner and Github, Bitbucket, Gitlab')
    cy.contains('The Stylus.js preprocessor for working with CSS, I also work with Less and Sass')
    cy.contains('Always looking to develop and write semantic HTML with the latest version')
    cy.contains('Using maximum that language offers, I also use Pug.js a template engine')
    cy.contains('My focus is improving information with performance, a lot of quality, and innovation')
    cy.contains('Creating End-to-End tests with Cypress.io, generating positive results in projects')
    cy.contains('Doing research and usability tests, improving the experience with CSS animations')
  })
  it('Render Portuguese Brazilian', () => {
    cy.get('.app-language').select('pt')
    cy.wait(1000)
    cy.contains('Programador Front-end e Designer especialista em criar solu????es tecnol??gicas nos padr??es Web')
    cy.contains('Eu estudo ingl??s, espanhol e falo portugu??s brasileiro.')
    cy.contains('Desenvolvendo sempre solu????es com as seguintes tecnologias: CSS, HTML, JavaScript')
    cy.contains('React.js e os Framework Angular, Vue.js e Svelte.js')
    cy.contains('Webpack, Gulp.js, Grunt.js, ParcelJS, Cypress.io, Quasar.js, Nuxt.js, Typescript, ES6')
    cy.contains('Trabalhando com testes unit??rios em Vitest, Jest e Karma')
    cy.contains('Utilizo o Git como versionador de c??digo e o github, bitbucket, gitlab')
    cy.contains('O pr??-processador Stylus para trabalhar o CSS, tamb??m trabalho com Less e Sass')
    cy.contains('Buscando sempre desenvolver e escrever um HTML sem??ntico em sua ??ltima vers??o')
    cy.contains('Utilizando o m??ximo que a linguagem oferecer, tamb??m utilizo o Pug.js como template')
    cy.contains('Meu foco ?? a melhoria da informa????o com performance trazendo qualidade e inova????o')
    cy.contains('Criando testes End-to-End usando Cypress.io, gerando resultados positivos nos projetos')
    cy.contains('Fazendo pesquisas e testes de usabilidade, melhorando a experi??ncia com anima????es em CSS')
  })
  it('Render Spanish', () => {
    cy.get('.app-language').select('es')
    cy.wait(1000)
    cy.contains('Programador Front-end y Dise??ador especialista en crea soluciones tecnol??gicas en est??ndares web')
    cy.contains('Yo estudio ingl??s, espa??ol y hablo portugu??s brasile??o.')
    cy.contains('Siempre desarrollando soluciones con las siguientes tecnolog??as: CSS, HTML, JavaScript')
    cy.contains('React.js y los frameworks Angular, Vue.js y Svelte.js')
    cy.contains('Webpack, Gulp.js, Grunt.js, ParcelJS, Cypress.io, Quasar.js, Nuxt.js, Typescript, ES6')
    cy.contains('Trabajando con pruebas unitarias en Vitest, Jest y Karma')
    cy.contains('Uso Git como versionador de los c??digo y Github, Bitbucket, Gitlab')
    cy.contains('El preprocesador Stylus.js para trabajar con CSS, tambi??n trabajo con Less y Sass')
    cy.contains('Siempre buscando desarrollar y escribir HTML sem??ntico en su ??ltima versi??n')
    cy.contains('Utilizando el m??ximo que la lenguaje ofrece, tambi??n uso Pug.js como template')
    cy.contains('Mi enfoque es mejorar la informaci??n con desempe??o, brindando mucha calidad e innovaci??n')
    cy.contains('Creando pruebas End-to-End usando Cypress.io, generando resultados positivos en los proyectos')
    cy.contains('Realizaci??n de pruebas de investigaci??n y usabilidad, mejorando la experiencia con animaciones CSS')
  })
})

describe('Test render home page footer', () => {
  it('Render footer', () => {
    cy.get('.app-footer').should('exist')
    cy.get('.app-footer').contains('2022 @lucasferreiralimax')
  })
})
