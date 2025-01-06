describe('My first test suit',function(){
    it('my first test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productLocator')
        cy.get('.product').should('have.length',5);
        cy.get('@productLocator').find('.product').should('have.length',4);
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }

        })
        //assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is to print in logs
        cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })
        //const logo=cy.get('.brand')
        //cy.log(cy.get('.brand').text())
        // cy.log(logo.text())

    })

})