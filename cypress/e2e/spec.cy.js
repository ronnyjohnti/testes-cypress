const {
  loginAsSuperAdmin,
  loginAsRegisteredAgent,
} = require('../commands/login');
const backToHomepage = require('../commands/backToHomepage');
const clickOutside = require('../commands/clickOutside');

describe('Recursos', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  /*it('Configurar período de recurso na oportunidade', () => {
    loginAsSuperAdmin();
    cy.visit('/oportunidade/4977');
    cy.contains('Editar').click();

    cy.contains('Configuração do Formulário').click();
    cy.contains('formulário de recurso').click();
    cy.contains('Formulário para recurso')
        .parent()
        .find('select')
        .select('formulário de recurso habilitado');

    const currentDatetime = new Date();
    const currentDate = currentDatetime.getFullYear()
        +'-'+ (currentDatetime.getMonth()+1).toString().padStart(2,'0')
        +'-'+ currentDatetime.getDate().toString().padStart(2,'0');
    const currentTime = currentDatetime.getHours().toString().padStart(2,'0')
      +':'+ currentDatetime.getMinutes().toString().padStart(2,'0');

    cy.contains('Data Inicial:').next().click();
    cy.get('input[type=date]').type(currentDate);
    cy.contains('Hora Inicial:').next().click();
    cy.get('input[type=time]').type(currentTime);

    cy.contains('Data Final:').next().click();
    cy.get('input[type=date]').type(currentDate);
    cy.contains('Hora Final:').next().click();
    cy.get('input[type=time]').type('23:59');

    clickOutside();

    cy.contains('Salvar').click();

    backToHomepage();
  });*/

  it('Abrir um recurso na oportunidade', async () => {
    loginAsRegisteredAgent();
    cy.visit('/oportunidade/4977');
    cy.url()
      .should('match', /oportunidade\/4977/);

    cy.contains('Ir para página de recurso').click();
    cy.url()
      .should('include', 'painel/inscricoes')
      .should('include', 'tab=enviadas');

    const url = await cy.url().then(url => url);
    const regId = url.split('#')[0].split('/').at(-1);

    cy.get(`a[href*=${regId}]`)
      .parent('h1')
      .parent('article')
      .find('a:contains(Abrir Recurso)')
      .click();
  });
});
