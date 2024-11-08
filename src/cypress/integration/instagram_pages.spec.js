describe('Instagram Pages Table', () => {
    it('Displays shimmer effect during loading', () => {
      cy.visit('/');
      cy.get('.react-loading-skeleton').should('exist');
    });
  
    it('Fetches and displays data', () => {
      cy.visit('/');
      cy.get('table').should('exist');
      cy.get('tbody tr').should('have.length.greaterThan', 0);
    });
  
    it('Sorts by column', () => {
      cy.visit('/');
      cy.contains('Price').click();
      cy.get('tbody tr').should('have.length.greaterThan', 0);
    });
  });
  