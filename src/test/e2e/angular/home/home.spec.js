'use strict';

var AngularHomepage = require('./home.po.js');

describe('Angular Homepage', () => {

  beforeEach(() => {
    this.page = new AngularHomepage();
    browser.get('/home');
  });

  it('should have a title "Tests en Angular"', () => {
    expect(browser.getTitle()).toBe('Tests en Angular');
  });
  
});

