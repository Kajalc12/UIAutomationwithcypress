describe('My first test suit',function(){
    it('my first test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        // select checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        // select all  or multiple checkbox at a time
        cy.get('input[type="checkbox"]').check(['option2','option3']);

        // select from dropdown static and dynamic
        // 1 below shown code is example of static dropdown
        cy.get('select').select('option2').should('have.value','option2');
          // 2 below shown code is example of dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="India")
            {
               cy.wrap($el).click();
            }

    })
    // autocomplete (assertion/validation)
    cy.get('#autocomplete').should('have.value','India');
    // visible invisible text box by buttons 
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    // radio buttons
    cy.get('value=["radio2"]').check().should('be.checked');
    
})

})