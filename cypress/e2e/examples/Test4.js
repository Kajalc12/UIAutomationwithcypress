describe('My first test suit',function(){
    it('my first test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        // how to handle auto alerts in web apps
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
        // handling child tab with cypress and jquery
        cy.get('#opentab').invoke('removeAttr','target').click();
    })
})