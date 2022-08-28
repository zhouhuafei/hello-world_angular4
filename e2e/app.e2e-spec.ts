import { HelloWorldAngular4Page } from './app.po';

describe('hello-world_angular4 App', () => {
  let page: HelloWorldAngular4Page;

  beforeEach(() => {
    page = new HelloWorldAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
