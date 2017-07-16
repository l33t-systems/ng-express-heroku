import { NgExpressHerokuPage } from './app.po';

describe('ng-express-heroku App', () => {
  let page: NgExpressHerokuPage;

  beforeEach(() => {
    page = new NgExpressHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
