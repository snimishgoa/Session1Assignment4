import { Session1Assignment4Page } from './app.po';

describe('session1-assignment4 App', () => {
  let page: Session1Assignment4Page;

  beforeEach(() => {
    page = new Session1Assignment4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
