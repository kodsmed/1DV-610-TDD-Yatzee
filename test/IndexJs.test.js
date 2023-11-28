import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { jest } from '@jest/globals'

describe('index.js', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Launch the browser
    browser = await puppeteer.launch({headless: "false"});
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
    await page.close();
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

  it('should call startGame(x) where x is the value of the select element when the button labeled "Start" is clicked', async () => {
    for (let i = 0; i < 4; i++) {
      // Select the third option
      const selection = await page.select('select', `${i + 1}`);
  
      // Set up a function to capture the event data
      const eventData = page.evaluate(() => {
        return new Promise((resolve) => {
          document.querySelector('button').addEventListener('click', () => {
            const eventDetailValue = document.querySelector('select').value;
            resolve(eventDetailValue);
          });
        });
      });

      const eventDetailData = page.evaluate(() => {
        return new Promise((resolve) => {
          window.addEventListener('startNewGame', (event) => {
            const eventDetailDataValue = event.detail
            resolve(eventDetailDataValue);
          });
        });
      });
  
      // "click" the button
      await page.click('button');

  
      // Check if the event data matches expected value
      // expect(await eventData).toBe('3');
      expect(await eventDetailData).toEqual(selection[0])

    }
  });

  it('should show the input field for a player name and hide numberOfPlayers select element after selection.', async () => {
    const selection = await page.select('select', '1');

    await page.click('button');

    const inputDisplayStyle = await page.$eval('#playerName', el => el.style.display);
    expect(inputDisplayStyle).not.toBe('none');
    const selectDisplayStyle = await page.$eval('select', el => el.style.display);
    expect(selectDisplayStyle).toBe('none');
  })

  it('the button text should reflect the action', async () => {
    await page.select('select', '3');

    await page.clíck('button');
    let buttonText = await page.$eval('button', el => el.textContent);
    expect(buttonText).toBe('Submit player1s name');

    await page.click('input[type=text');
    await page.type('input[type=text]', 'Alice');
    await page.click('button');

    buttonText = await page.$eval('button', el => el.textContent);
    expect(buttonText).toBe('Submit player2s name');

    await page.click('input[type=text');
    await page.type('input[type=text]', 'Bob');
    await page.click('button');

    buttonText = await page.$eval('button', el => el.textContent);
    expect(buttonText).toBe('Submit player3s name');

  })
  
}, 100000);
