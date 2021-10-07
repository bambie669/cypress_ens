/// <reference types="Cypress"/>

describe('My first Twitch test', () => {
    it('Emote picker icon not displayed in chat input field', () => {
        cy.visit('https://www.twitch.tv/bambiehswd')
        cy.get('.ScTextWrapper-sc-18v7095-1 > .jDqVhz').click()
        cy.get('.chat-input__input-icons > .Layout-sc-nxg1ff-0 > .ScCoreButton-sc-1qn4ixc-0').should('not.exist')
    })
})