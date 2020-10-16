describe('The Home Page', () => {
  it('create and todo item', () => {
    cy.visit('#/todos');
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('First TODO Item');
      cy.get('.appLayout').should('exist');
      cy.get('button').click();
      cy.get('.todoItem').should('exist');
    });
  });

  it('toggle on and off todo item', () => {
    cy.get('.check').contains('☐');
    cy.get('.check').click();
    cy.get('.check').contains('☑');
    cy.get('.check').click();
    cy.get('.check').contains('☐');
  });

  it('delete todo item', () => {
    cy.get('.trash').click();
    cy.get('.todoItem').should('not.exist');
  });
});
