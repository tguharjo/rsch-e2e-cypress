describe('Hooks Demo', function (){

  before(function(){
      cy.log('This code will be executed once before any test execution')
  });
  
  beforeEach(function(){
      cy.log('This code is executed before any test execution');
  });

  context('Context #1', function(){
      it('should be a #1 dummy test using IT',function(){
          console.log('#1 Test');
      });
  });
  context('Context #2', function(){
      specify.skip('should be a #2 dummy test using SPECIFY', function(){
          console.log('#2 Test')
      });
  });
  
  context('Context #3', function(){
      specify.only('should be a #3 dummy test using SPECIFY', function(){
          console.log('#3 Test')
      });
  });

  afterEach(function(){
      cy.log('This code is executed after any test execution');
  });
  
  after(function(){
      cy.log('This code will be executed once all test execution is done');
  });
});

