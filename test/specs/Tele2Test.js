describe('Tele2 main page test',async()=>{                                                                              //describe it - описание тестового сценария с асинхронными функциями

    it('Запускаю основную страницы Tele2-ЛК',async()=>{

        await browser.url("https://nnov.tele2.ru/lk");                                                                  // подождет(await), пока запуститься браузер и страница, затем перейдет к следующему шагу
        await expect(browser).toHaveUrl("https://nnov.tele2.ru/lk");                                                    // проверка url адреса (except - ожидаю)
        await expect(browser).toHaveTitle("Личный кабинет Tele2 - вход по номеру телефона Нижегородская область");      // проверка заголовка вкладки 
        console.log(await browser.getTitle());                                                                          // выведет заголовок сайта, подождет, пока не напечатается полностью 
        


    });
});


/*
//локаторы
await $("//input[@id='keycloakAuth.phone']").click();
await $("//input[@id='keycloakAuth.phone']").setValue('8005555555');  //ввод данных в поле
await $('.not-print-element.close.icon-close').click();
await browser.pause(2000);
console.log(await $("//div[text()='Войдите в личный кабинет Tele2']").getText());   // получение текста из элемента */