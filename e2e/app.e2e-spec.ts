import { EaiMonPage } from './app.po';

describe('eai-mon App', () => {
  let page: EaiMonPage;

  beforeEach(() => {
    page = new EaiMonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
