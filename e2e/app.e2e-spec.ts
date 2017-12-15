import { PopMoviesPage } from './app.po';

describe('pop-movies App', () => {
  let page: PopMoviesPage;

  beforeEach(() => {
    page = new PopMoviesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
