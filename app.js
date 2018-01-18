//Dependencies
const express = require("express");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const chai = require("chai");
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

// Manual Chromedriver PATH Declaration
const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

// Test Imports
const titleContains = require('selenium-webdriver/lib/until');

// Driver is Defined
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// Test Code Begins
describe(   'title test',  function() {
    before(function() {
        driver.get('http://stimbus.com');
    });

    it( 'should contain the company name', async() => {
        const result = await resolvingPromise;
        driver.getTitle().then(function(title){
            expect(title).to.contain('stimbus');
        });
    });

    after(function() {
        return driver.quit();
    });
})