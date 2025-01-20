const cymapTasks = require("cymap/src/cymapTasks");

describe('My First Test', () => {
    
    it('Visits the Kitchen Sink', () => {
        // cy.visit("/");
        // cy.get('a[data-id="2"]').click();
        // cy.get('.badge-success').contains('1');
        
        cy.setConnectionConfig( {
            password:"vdso vtxq miht ydwq",
            user:"juanchomon45@gmail.com",
            host:'imap.gmail.com',
            port:993,
            tls:true,
            tlsOptions: { rejectUnauthorized: false }
        });
        cy.getEmailByIndex(1);
    })
  })
