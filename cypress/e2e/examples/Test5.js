///<<<Reference types="cypress">/
describe('Handling Child Windows',()=>{
    it('Should handle child window',()=>{
        // handling cross domain and child windows which in opening in new tab
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');
        cy.get("#opentab").invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/',()=>
        {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain','QAClick Academy');
            

        });
    })
})