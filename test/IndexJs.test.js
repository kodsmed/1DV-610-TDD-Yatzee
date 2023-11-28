import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

describe('index.js', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Launch the browser
    browser = await puppeteer.launch({headless: "new"});
    // Create a new page
    page = await browser.newPage();
    // Navigate to your local HTML file and wait for the script to finish
    const pathToHtml = `${path.resolve('./serve/index.html')}`;
    await page.goto(pathToHtml, { waitUntil: 'load' });

    const scriptContent = fs.readFileSync(`${path.resolve('./serve/compiled-js/index.js')}`, 'utf-8');
    await page.evaluate(scriptContent => {
      const scriptEl = document.createElement('script');
      scriptEl.type = 'module';
      scriptEl.textContent = scriptContent;
      document.body.appendChild(scriptEl);
    }, scriptContent);

  });

  afterAll(async () => {
    // Close the browser when done
    await browser.close();
  });

  it('should hide the name input until number of players have been selected', async () => {
    const displayStyle = await page.$eval('#playerName', el => el.style.display);
    expect(displayStyle).toBe('none');
  });

  it('should set the textContent of the submit button to "Start"', async () => {
    const buttonText = await page.$eval('button', el => el.textContent);
    expect(buttonText).toBe('Start');
  });
});
