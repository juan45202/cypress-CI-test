
describe('My First Test', () => {
    
    it('Visits the Kitchen Sink', () => {
        // cy.visit("/");
        // cy.get('a[data-id="2"]').click();
        // cy.get('.badge-success').contains('1');
        console.log("OEEEEE", Cypress.env('password'))
        cy.setConnectionConfig( {
            password: Cypress.env('password'),
            user: Cypress.env('user'),
            host: Cypress.env('host'),
            port: Cypress.env('port'),
            tls:true,
            tlsOptions: { rejectUnauthorized: false }
        });
        cy.getEmailByIndex(1);
        
    })
  })
