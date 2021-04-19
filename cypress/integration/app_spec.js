describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click()
      // cy.wait(4500) this would be a solution but it would always take 4500ms while the api might respond in a bit less than this. so timeout is a better solution
    cy.get('li', {timeout: 4500})
      .should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
