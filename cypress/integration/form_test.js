describe('all MVP tests',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza') //eslint-disable-line
    })

    it('adds text to first box',()=> {
        cy.get('[data-cy=name]') //eslint-disable-line
            .type('Justin')
            .should('have.value','Justin')
    })

    it('adds text to second box',()=> {
        cy.get('[data-cy=special]') //eslint-disable-line
            .type('Make it with extra love')
            .should('have.value','Make it with extra love')
    })

    it('selects multiple checkboxes', () => {
        cy.get('[data-cy=pepperoni]') //eslint-disable-line
            .check()
        cy.get('[data-cy=chicken]') //eslint-disable-line
            .check()
        cy.get('[data-cy=onions]') //eslint-disable-line
            .check()
    })

    it('tries to submit', () => {
        cy.get('[data-cy=name]') //eslint-disable-line
            .type('Justin')
        cy.get('[data-cy=size]') //eslint-disable-line
            .select('large')
        cy.get('[data-cy=submit]') //eslint-disable-line
            .click()
    })
})
