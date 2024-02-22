/// <reference types="Cypress" />

describe('Product List', () => {
  it('should display the app name on the product list page', () => {
    cy.visit('/products');
    cy.contains('Angular Tutorial - Product Management');
    cy.get('.container > p').should('contain.text', 'Data from Restful API');
  });

  it('should navigate to home page', () => {
    cy.visit('/products');
    cy.get('[routerlink="/"]').click();
    cy.get('h1').should('contain.text', 'Game Store - Product Management');
  });

  it('should navigate to product add page', () => {
    cy.visit('/products');
    cy.get('[routerlink="product"]').click();
    cy.get('app-product > .container > h2').should('contain.text', 'Create New Product');
  });
});
