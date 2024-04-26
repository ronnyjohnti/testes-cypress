const loginAsSuperAdmin = () => {
  cy.request({
    method: 'GET',
    url: `/autenticacao/fakeLogin?fake_authentication_user_id=${Cypress.env('USER_ID')}`,
  });
};

const loginAsRegisteredAgent = () => {
  cy.request({
    method: 'GET',
    url: `/autenticacao/fakeLogin?fake_authentication_user_id=48119`,
  });
}

module.exports = {
  loginAsSuperAdmin,
  loginAsRegisteredAgent,
};
