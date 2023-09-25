describe('Тестирование радиокнопки |', async()=>{

    it('Выбор переключателя', async()=>{
        await browser.url("https://nnov.tele2.ru/lk");
        let radioButton = await $('тут его локатор');                   // объявил переменную с локатором радиокнопки
        radioButton.click();                                            // сделал по ней клик  
        
        //isEnabled() - включен ли элемент
        console.log(await radioButton.isEnabled());
        //isDisplayed() - отображается ли элемент
        console.log(await radioButton.isDisplayed());
        //is Clickable() - кликабельный ли элемент
        console.log(await radioButton.isClickable());

    });
});

