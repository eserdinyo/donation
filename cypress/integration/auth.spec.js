/// <reference types="cypress" />

describe('User Login and Sign-up', () => {
  it('should log in', () => {
    cy.visit('/')
    cy.get('[data-test="signin-button"]').click()
    cy.get('[data-test="email-input"]').type('demo@gmail.com')
    cy.get('[data-test="password-input"]').type('password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="fullname"]').should('contain.text', 'John Doe')
  })
})