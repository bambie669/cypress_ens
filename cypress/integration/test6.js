/// <reference types="Cypress"/>

describe('My first Twitch test', () => {
    it('My first test case', () => {
        cy.visit('https://www.twitch.tv/login')
        cy.get('#login-username').type('qa_partner')
        cy.get('#password-input').type('Test#1234')
        cy.get('.hvrRMx > :nth-child(3) > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-sc-lh1yxp-0 > .Layout-sc-nxg1ff-0').click()
        cy.get('.giSGZi > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-sc-lh1yxp-0 > .Layout-sc-nxg1ff-0').click()
        cy.visit('https://www.twitch.tv/richelletest')
        cy.get('[data-index="3"] > .ScInteractive-sc-18v7095-0 > .fiEXZq > .ScTextWrapper-sc-18v7095-1 > .CoreText-sc-cpl358-0').click()
        // cy.get('.ScFace-sc-cdc1ai-4').click()
        // cy.get(':nth-child(5) > .eVJikG > .lfUmKp > .ScCoreLink-sc-udwpw5-0 > .Layout-sc-nxg1ff-0 > .CoreText-sc-cpl358-0').click()
        cy.get('.cxWlKh > .eVJikG > .lfUmKp > .ScCoreLink-sc-udwpw5-0 > .Layout-sc-nxg1ff-0 > .CoreText-sc-cpl358-0').click()
        cy.go('back')
        cy.get(':nth-child(3) > .eVJikG > .lfUmKp > .ScCoreLink-sc-udwpw5-0 > .Layout-sc-nxg1ff-0 > .CoreText-sc-cpl358-0').click()
        cy.go('back')
        cy.get(':nth-child(4) > .eVJikG > .lfUmKp > .ScCoreLink-sc-udwpw5-0 > .Layout-sc-nxg1ff-0 > .CoreText-sc-cpl358-0').click()
        cy.go('back')
        cy.get(':nth-child(5) > .eVJikG > .lfUmKp > .ScCoreLink-sc-udwpw5-0 > .Layout-sc-nxg1ff-0 > .CoreText-sc-cpl358-0').click()

    })

})