describe('Handling Child Windows',()=>{
    it('Should handle child window',()=>{
        // check boxes
        // mousehover code
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');
        cy.get('#mousehover').invoke('show') //jquery func to work with hidden element
        cy.contains('Top').click();
        cy.contains('Top').click();//cypress functionality to clickonhidden element error
        cy.contains('Top').click({force:true});//cypress functionality to clickonhidden element will work
        cy.url().should('include','top');
        //validation line
    })
})