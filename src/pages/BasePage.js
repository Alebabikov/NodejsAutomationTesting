module.exports = new class BasePage {

    async navigateToUrl(){

        await browser.url('https://nnov.tele2.ru/lk');
        //browser.maximizeWindow();
    }

}