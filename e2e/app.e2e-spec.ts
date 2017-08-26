import { HanmengruExamPage } from './app.po';

describe('hanmengru-exam App', function() {
  let page: HanmengruExamPage;

  beforeEach(() => {
    page = new HanmengruExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
