module.exports = new class HelpAndSupportPage {

    get searchField() {
        return $("div>input[type='text']");
    }

    async CliuckField(){
        await this.searchField.click();
        browser.pause(2000);
        
    }

    async SendText(){
        await this.searchField.toHaveValue('нет денег')
    }
}
