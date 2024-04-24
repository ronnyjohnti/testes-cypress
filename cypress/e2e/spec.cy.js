describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/autenticacao');

    let el = cy.contains('Filtrar usuário').click();
    el.type('ronny.john');
    cy.contains('Login com usuario ').contains('Ronny John').click();
    cy.contains('Logar').click()
  })
})