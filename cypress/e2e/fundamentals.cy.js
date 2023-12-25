describe('fundamentals test ', () => {
  it('Find the content "type"', () => {
    cy.visit('http://localhost:3000/fundamentals')

    cy.contains('beforeEach')
  })
})