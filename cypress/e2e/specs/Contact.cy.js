import contacts from '../../fixtures/contacts';

describe('Test render contact page', () => {
  it('Render header with Brasil, Lucas and link /', () => {
    cy.visit('/contact')
    cy.get('.app-header__name a').invoke('attr', 'href').should('contain', '/')
    cy.contains('.app-header__name', 'Lucas Ferreira de Lima')
  })
})

describe('Test render contact page', () => {
  for(let [index, contact] of contacts.entries()) {
    it(`Render contact ${contact.name}`, () => {
      const item = cy.get(`.app-social a:nth-of-type(${++index})`)

      item.should('exist');
      item.invoke('attr', 'href').should('contain', contact.link);
    })
  }
})

describe('Test render contact footer', () => {
  it('Render footer', () => {
    cy.get('.app-footer').should('exist')
    cy.get('.app-footer').contains(`@lucasferreiralimax — ${new Date().getFullYear()}`)
  })
})

describe('Test render contact page languages', () => {
  it('Render English', () => {
    cy.get('.app-language').select('en')
    cy.wait(1000)
    cy.contains('Contacts')
  })
  it('Render Portuguese Brazilian', () => {
    cy.get('.app-language').select('pt')
    cy.wait(1000)
    cy.contains('Contatos')
  })
  it('Render Spanish', () => {
    cy.get('.app-language').select('es')
    cy.wait(1000)
    cy.contains('Contactos')
  })
})
