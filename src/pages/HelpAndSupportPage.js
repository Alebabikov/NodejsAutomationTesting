module.exports = new class HelpAndSupportPage {

    get searchField() {
        return $("div>input[type='text']");
    }

    async ClickField(){
        await this.searchField.click();
    }

    async SendText(){
        await this.searchField.setValue('нет денег')
    }
}

