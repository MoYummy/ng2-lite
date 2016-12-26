import { Ng2LitePage } from './app.po';

describe('ng2-lite App', function() {
  let page: Ng2LitePage;

  beforeEach(() => {
    page = new Ng2LitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
