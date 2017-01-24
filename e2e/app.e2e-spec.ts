import { WeMovePage } from './app.po';

describe('we-move App', function() {
  let page: WeMovePage;

  beforeEach(() => {
    page = new WeMovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
