import { browser, element, by } from 'protractor';

export class ProjetaAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pa-root h1')).getText();
  }
}
