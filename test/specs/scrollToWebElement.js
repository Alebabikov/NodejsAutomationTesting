describe('Тестирование скролла |', async()=>{

    it('Переход через скролл к элементу', async()=>{
        
        await browser.url('https://nnov.tele2.ru/lk');
        let a = await $("//div[text()='Вопросы и ответы']");
        await a.scrollIntoView();
        browser.pause(3000)

          
    })
})