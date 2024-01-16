/// <reference types="cypress"/>

describe('Log in', () => {
  it.skip('Log in with Standard user', () => {
    cy.visit('https://www.saucedemo.com/v1/')


    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()

  //  cy.get('.btn_inventory').click({ multiple: true })

    // let numberofitemstoadd = 2
    // for( let i=0;i<numberofitemstoadd;i++) {
    //   cy.get('.btn_inventory').eq(i).click()
    //   cy.screenshot("photoo")
    // }

   // cy.get('.btn_inventory').last().click()

    cy.get('.btn_inventory').first().click()

    cy.wait(3000)
  })

    it('Log in with Problem user', () => {
    cy.visit('https://www.saucedemo.com/v1/')


    cy.get('[data-test="username"]').type("problem_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()

  })

  
})