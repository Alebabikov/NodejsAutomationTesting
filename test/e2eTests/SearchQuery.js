const BasePage = require('../../src/pages/BasePage');
const homePage = require('../../src/pages/homePages');
const SearchPage = require('../../src/pages/SearchPage');
const assertChai = require('chai').expect;

describe('Поисковые запросы |', async()=>{
    it('Ввод запроса', async()=>{
        await BasePage.navigateToUrl();
        await homePage.CloseAndOpenQuestions();
        await homePage.ClickSearchField();
        await SearchPage.SendText();
        await assertChai.equal(SearchPage.GetResult(), 'Мобильный перевод');
        

    })
})


