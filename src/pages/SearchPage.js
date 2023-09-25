module.exports = new class SearchPage {

    get SearchField(){
        return $("input[type='text']");
    }

    get queryResult(){
        return $("//div[text()='Мобильный перевод']");
    }





    async SendText(){
        await this.SearchField.setValue('перевод')
    }

    async GetResult(){

       console.log(await this.queryResult.getText());
    }
}
