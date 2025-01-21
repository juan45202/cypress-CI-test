
describe('My First Test', () => {

    it('Visits the Kitchen Sink', () => {
        cy.log("OEEEEEEEE",Cypress.env('password'));
        console.log(Cypress.env('port'));
        cy.setConnectionConfig( {
            password: Cypress.env('PASSWORD'),
            user: Cypress.env('USER'),
            host: Cypress.env('HOST'),
            port: Cypress.env('PORT'),
            tls:true,
            tlsOptions: { rejectUnauthorized: false }
        });
        cy.getEmailByIndex(1);
        console.log("PASAMOOOOOs");
        
    })
  })
