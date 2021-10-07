/// <reference types="Cypress"/>

describe('My first Twitch test', () => {
    it('My first test case', () => {
        cy.visit('https://www.twitch.tv/login')
        cy.get('#login-username').type('fdsfhdskfkasjhflkajh')
        // cy.get('#login-username').type('qa_partner')
        // cy.get('#password-input').type('Test#1234')
        // cy.get('.hvrRMx > :nth-child(3) > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-sc-lh1yxp-0 > .Layout-sc-nxg1ff-0').click()
        // cy.get('.giSGZi > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-sc-lh1yxp-0 > .Layout-sc-nxg1ff-0').click()
    })
})