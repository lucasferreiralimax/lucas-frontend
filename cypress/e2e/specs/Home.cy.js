describe('Test render home page', () => {
  it('Render header with Brasil, Lucas and link /', () => {
    cy.visit('/')
    cy.get('.app-header__name a').invoke('attr', 'href').should('contain', '/')
    cy.get('[aria-label="Brasil"]').should('exist')
    cy.contains('.app-header__name', 'Lucas Ferreira de Lima')
  })
})
