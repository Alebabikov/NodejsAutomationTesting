describe('Тестирование выпадающих списков |', async()=>{

    it('Выбор элемента из списка', async()=>{

        await browser.url("https://nnov.tele2.ru/lk");
        await $('.not-print-element.close.icon-close').click();
        await $("//li[@class='header-navbar-main-line-navigation-item header-navbar-main-line-navigation-item_none']/a[text()='О Tele2']").click();
        await $("//span[text()='Вакансии']").click();
        await $("//button[@class='underscored-button']").click();
        await $("//div[@class='vacancies-regions-popup']/div[@class='text-field-holder search-field input-theme--rounded-corners']").click();
        await $("//input[@name='searchRegionName']").setValue('Москва')
        await $("//a[text()='Москва и область']").click();
        let selectDivision = (await $("//li[@role='option']//span[@class]"));
        await selectDivision.selectByVisibleText('Безопасность и право')       //selectByAttribute selectByVisibleText selectByIndex
        await browser.pause(2000)


    })
})

//li[@role='option']//span[@class]  - элементы списка
//ul[@id='multiselect_9de2f89b3f5b8b48c221a56d73c4e49b_listbox'] - список
//div[@class='rw-widget-input rw-widget-picker rw-widget-container']