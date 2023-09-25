const expectChai = require('chai').expect;

describe('Tele2 тест основной страницы | ',async()=>{                                                                              //describe it - описание теста с асинхронными функциями

    it('Запускаю Tele2-ЛК',async()=>{

        await browser.url("https://nnov.tele2.ru/lk");                                                                             // подождет(await), пока запуститься браузер и страница, затем перейдет к следующему шагу
        expectChai (await browser.getUrl()).to.include('tele2');                                                                    // ожидает, что url включает слово tele2
        expectChai (await browser.getTitle()).to.equal("Личный кабинет Tele2 - вход по номеру телефона Нижегородская область");     // ожидает, что заголовок соответствует указанному в кавычках
        

    });
    
});