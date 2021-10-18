describe('Test Structure', () => {
  
  before(function(){
    cy.log('This code will be executed once before any test execution')
  });     

  beforeEach(function(){
    cy.visit('');
  });

  context('Login with positive case', function(){
    it('login with valid credentials', function () {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('.title').should('have.text', 'Products');
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
    });
  });

  context('Login with negative case', function(){
    it('login with invalid credentials', function() {
      cy.get('[data-test="username"]').type('user_standard');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });
  });

  afterEach(function(){
    cy.url('').should('eq', Cypress.config('baseUrl'));
  });

  after(function(){
      cy.log('This code will be executed once all test execution is done');
  });

});