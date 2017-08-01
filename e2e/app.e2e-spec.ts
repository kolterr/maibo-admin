import { MaiboAdminPage } from './app.po';

describe('maibo-admin App', () => {
  let page: MaiboAdminPage;

  beforeEach(() => {
    page = new MaiboAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
