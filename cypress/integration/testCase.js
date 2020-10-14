/// <reference types="Cypress" />

describe('formTesting', () => {

    it('test open form layout page ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.url().should('include', 'pages/forms/layouts');
    });

    it('test fill Inline form ', () => {
        cy.get('nb-card').contains("Inline form");
        cy.get('[placeholder="Jane Doe"][type="text"]')
            .type("Isyak")
            .should("have.value", "Isyak");
        cy.get('[placeholder="Email"][type="text"]')
            .type("Isyak@mail.com")
            .should("have.value", "Isyak@mail.com");
        cy.contains('Remember me')
            .parent('nb-checkbox')
            .find('[type="checkbox"]')
            .check({ force: true })
            .should('be.checked');
    });

    it('test fill form sing the Grid', () => {

        cy.get('nb-card').contains("Using the Grid");
        cy.get('[data-cy="imputEmail1"]').type("Isyak@mail.com").should("have.value", "Isyak@mail.com");
        cy.get('#inputPassword2').type("password").should("have.value", "password");
        cy.contains('Radios')
            .parent('div')
            .find('[type="radio"]')
            .first()
            .check({ force: true })
    });

    it('test fill Basic form', () => {

        cy.get('nb-card').contains("Basic form");
        cy.get('#exampleInputEmail1')
            .type("Isyak@mail.com")
            .should("have.value", "Isyak@mail.com");
        cy.get('#exampleInputPassword1')
            .type("password")
            .should("have.value", "password");
        cy.contains('Check me out')
            .parent('nb-checkbox')
            .find('[type="checkbox"]')
            .check({ force: true })
            .should('be.checked');
    });

    it('test fill Form without labels', () => {
        cy.get('nb-card').contains("Basic form");
        cy.get('[placeholder="Recipients"][type="text"]')
            .type("Isyak")
            .should("have.value", "Isyak");
        cy.get('[placeholder="Subject"][type="text"]')
            .type("compain")
            .should("have.value", "compain");
        cy.get('[placeholder="Message"]')
            .type("Cypress makes it quick and easy to start testing, and as you begin to test your app, you’ll often wonder if you’re using best practices or scalable strategies.")
            .should("have.value", "Cypress makes it quick and easy to start testing, and as you begin to test your app, you’ll often wonder if you’re using best practices or scalable strategies.");
        cy.contains('Check me out')
            .parent('nb-checkbox')
            .find('[type="checkbox"]')
            .check({ force: true })
            .should('be.checked');
    });

    it('tets fill Block Form', () => {
        cy.get('nb-card').contains("Basic form");
        cy.get('#inputFirstName')
            .type("Isyak")
            .should("have.value", "Isyak");
        cy.get('#inputLastName')
            .type("Rizqi")
            .should("have.value", "Rizqi");
        cy.get('#inputEmail')
            .type("Isyak@mail.com")
            .should("have.value", "Isyak@mail.com");
        cy.get('#inputWebsite')
            .type("www.isakweb.com")
            .should("have.value", "www.isakweb.com");
    });

});