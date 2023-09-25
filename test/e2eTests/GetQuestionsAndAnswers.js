const homePage = require('../../src/pages/homePages');          //импортируем нужную страницу
const BasePage = require('../../src/pages/BasePage');
const HelpAndSupportPage = require('../../src/pages/HelpAndSupportPage');


describe('Вопросы и ответы |', async()=>{

    it('Переход к разделу "Вопросы и ответЫ"', async()=>{

        await BasePage.navigateToUrl();
        await homePage.CloseAndOpenQuestions();
        await HelpAndSupportPage.ClickField();
        await HelpAndSupportPage.SendText()
        browser.pause(5000) 

    })
})