describe('Commands Demo', () => {
  
  beforeEach(function(){
    cy.visit('')
  });

  it('Custom commands for login', () => {
    cy.typeLogin('standard_user', 'secret_sauce');
    cy.get('.title').should('have.text', 'Products')
  });

  it('Custom commands for failed login', () => {
    cy.typeLogin('standard_user', 'standard_user');
    cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Custom commands for logout', () => {
    cy.typeLogin('standard_user', 'secret_sauce');
    cy.logout();
  });
  
});