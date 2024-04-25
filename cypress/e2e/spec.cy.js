describe('Recursos', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.loginAsSuperAdmin()
  })

  it('Configurar período de recurso na oportunidade', () => {
    cy.visit('/oportunidade/5142')
    cy.contains('Editar').click()

    cy.contains('Configuração do Formulário').click()
    cy.contains('formulário de recurso').click()
    cy.contains('Formulário para recurso')
        .parent()
        .find('select')
        .select('formulário de recurso habilitado')

    cy.contains('Data do início do Recurso').click()
    cy.type('02-02-2024')

    cy.contains('Salvar').click()
  })
})
