const expectChai = require('chai').expect;

describe('Обработка всплывающих окон | ', async()=> {


    it ('Вход по номеру телефона', async()=>{
        await browser.url("https://nnov.tele2.ru/lk");
        expectChai(await browser.isAlertOpen()).to.equal(true);            // проверит, открыт ли алерт
        let alertMessage = 'текст алерта';                                // объявлена переменная - текст сообщения
        expectChai(await browser.getAlertText()).to.equal(alertMessage);  //проверить, что текст в сообщении равен тексту сообщения
        //console.log(await browser.getAlertText());                        // получить текст алерта
        await browser.acceptAlert();                                      // принять алерт
    });
});