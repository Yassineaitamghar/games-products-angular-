/// <reference types="Cypress" />

describe('Product Add', () => {
  it('should display the app name on the product add page', () => {
    cy.visit('/product');
    cy.contains('Angular Tutorial - Product Management');
    cy.get('app-product > .container > h2').should('contain.text', 'Create New Product');
  });

  it('should navigate to home page', () => {
    cy.visit('/product');
    cy.get('[routerlink="/"]').click();
    cy.get('h1').should('contain.text', 'Game Store - Product Management');
  });

  it('should navigate to product list page', () => {
    cy.visit('/product');
    cy.get('[routerlink="products"]').click();
    cy.get('app-products > .container > h2').should('contain.text', 'Products');
  });
});
