
describe('My First Test', () => {

    it('Visits the Kitchen Sink', () => {
        cy.setConnectionConfig( {
            password: Cypress.env('password'),
            user: Cypress.env('user'),
            host: Cypress.env('host'),
            port: Cypress.env('port'),
            tls:true,
            tlsOptions: { rejectUnauthorized: false }
        });
        cy.getEmailByIndex(1);
        console.log("PASAMOOOOOs");
    })
  })
