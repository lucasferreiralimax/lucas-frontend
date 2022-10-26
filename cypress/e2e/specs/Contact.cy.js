import contacts from '../../fixtures/contacts';

describe('Test render contact page', () => {
  it('Render header with Brasil, Lucas and link /', () => {
    cy.visit('/contact')
    cy.get('.app-header__name a').invoke('attr', 'href').should('contain', '/')
    cy.get('[aria-label="Brasil"]').should('exist')
    cy.contains('.app-header__name', 'Lucas Ferreira de Lima')
  })
})

describe('Test render contact page', () => {
  for(let [index, contact] of contacts.entries()) {
    it(`Render tech ${contact.name}`, () => {
      const item = cy.get(`.app-social a:nth-of-type(${++index})`)

      item.should('exist');
      item.invoke('attr', 'href').should('contain', contact.link);
    })
  }
})

describe('Test render home page', () => {
  it('Render footer', () => {
    cy.get('.app-footer').should('exist')
    cy.get('.app-footer').contains('2022 @lucasferreiralimax')
  })
})
