/// <reference types="Cypress"/>

describe('Anon Bits Chat', () => {
    it('Bits icon not displayed in chat input field', () => {
        cy.visit('https://www.twitch.tv/qa_partner')
        cy.get('.ScTextWrapper-sc-18v7095-1 > .jDqVhz > .CoreText-sc-cpl358-0').click()
        cy.get('.imOUil > .ScCoreButton-sc-1qn4ixc-0 > .ScButtonIconFigure-sc-o7ndmn-1 > .ScIconLayout-sc-1bgeryd-0 > .ScAspectRatio-sc-1sw3lwy-1 > .ScIconSVG-sc-1bgeryd-1').should('not.exist')
        
    })
})