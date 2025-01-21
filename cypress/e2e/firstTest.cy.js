
describe('My First Test', () => {

    it('Visits the Kitchen Sink', () => {
        console.log("OEEEEEEEE",Cypress.env('password'));
        console.log(Cypress.env('port'));
        cy.setConnectionConfig( {
            password: Cypress.env('password'),
            user: Cypress.env('user'),
            host: Cypress.env('host'),
            port: +Cypress.env('port'),
            tls:true,
            tlsOptions: { rejectUnauthorized: false }
        });
        cy.getEmailByIndex(1);
        console.log("PASAMOOOOOs");
        
    })
  })
