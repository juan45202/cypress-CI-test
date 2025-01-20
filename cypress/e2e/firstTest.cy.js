
describe('My First Test', () => {
    
    /*{
        password: Cypress.env('vdso vtxq miht ydwq'),
        user: Cypress.env('user'),
        host: Cypress.env('host'),
        port: Cypress.env('port'),
        tls:true,
        tlsOptions: { rejectUnauthorized: false }
    }*/

    it('Visits the Kitchen Sink', () => {
        cy.setConnectionConfig( {
            password: "vdso vtxq miht ydwq",
            user: "juanchomon45@gmail.com",
            host: "imap.gmail.com",
            port: 993,
            tls:true,
            tlsOptions: { rejectUnauthorized: false }
        });
        cy.getEmailByIndex(1);
        console.log("PASAMOOOOOs");
    })
  })
