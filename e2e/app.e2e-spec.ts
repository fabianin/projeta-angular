import { ProjetaAngularPage } from './app.po';

describe('projeta-angular App', function() {
  let page: ProjetaAngularPage;

  beforeEach(() => {
    page = new ProjetaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pa works!');
  });
});
