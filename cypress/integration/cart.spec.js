/// <reference types="cypress" />

describe('Cart', () => {
  it('should add a product to cart', () => {
    cy.visit('/')
    cy.get('.donate-btn').first().click()
    cy.get('.swal2-confirm').click()
    cy.get('.ant-drawer-mask').click()
    cy.get('.donate-btn').last().click()

    cy.get('.payment-item').should('have.length', 2)
  })
})