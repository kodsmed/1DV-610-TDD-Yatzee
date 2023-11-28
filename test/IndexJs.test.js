import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { jest } from '@jest/globals'
import { vitePort } from '../setup.jest.js';

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
    await page.goto(`http://localhost:${vitePort}/`, { waitUntil: 'load' });
  });

  beforeEach(async () =>{
    await page.reload();
  })

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
      await page.reload();
      // Select the third option
      const selection = await page.select('select', `${i + 1}`);
      //const selection = await page.select('select', '3');

      let eventDetailData
      async function addEventListeners() {
      // Set up a function to capture the event data
      eventDetailData = page.evaluate(() => {
        return new Promise((resolve) => {
          window.addEventListener('startNewGame', (event) => {
            const eventDetailDataValue = event.detail
            resolve(eventDetailDataValue);
          });
        });
      });
      }

      // "click" the button
      await addEventListeners();
      await page.waitForSelector('button');
      // wait 600ms for the event to fire
      await delay(600);
      await page.click('button');


      // Check if the event data matches expected value
       //expect(await eventDetailData).toBe('3');
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

    await page.click('button');
    await delay(500)
    const buttonText = await page.$eval('button', el => el.textContent);
    expect(buttonText).toBe('Submit player1s name');

    await page.click('input[type=text');
    await page.type('input[type=text]', 'Alice');
    await page.click('button');
    await delay(500);
    const buttonText2 = await page.$eval('button', el => el.textContent);
    expect(buttonText2).toBe('Submit player2s name');

    await page.click('input[type=text');
    await page.type('input[type=text]', 'Bob');
    await page.click('button');
    await delay(500);
    const buttonText3 = await page.$eval('button', el => el.textContent);
    expect(buttonText3).toBe('Submit player3s name');

  })

}, 100000);

function delay(time) {
  return new Promise(function(resolve) {
      setTimeout(resolve, time)
  });
}