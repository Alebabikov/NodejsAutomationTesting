module.exports = new class HomePage {                    //создаем класс страницы, описываем свойства элементов, затем создаем функцию, которая совершает действия с эл-ми
    
    get closeStartWindow() {
        return $(".not-print-element.close.icon-close");
    }

    get QuestionAndsAnswers() {
        return $("//div[text()='Вопросы и ответы']");
    }

    async CloseAndOpenQuestions() {

        await this.closeStartWindow.click();
        await this.QuestionAndsAnswers.click();
    }
}

