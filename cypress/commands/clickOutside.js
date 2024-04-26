const clickOutside = () => {
  cy.get('body').click(0, 0);
};

module.exports = clickOutside
