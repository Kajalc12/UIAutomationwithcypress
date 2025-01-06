describe('calender test',()=>
{
   it('Verify data selection',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    cy.get('.react-date-picker__inputGroup').click();
    cy.get('.react-calendar__navigation__label').click();
    cy.contains('button',year).click();

    
   })
})