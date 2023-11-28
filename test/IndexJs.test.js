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

  // it('should call startGame(x) where x is the value of the select element when the button labled "Start" is clicked', async () => {

  //   let thirdOptionElement = page.$eval('select', selectElement => {
  //     const optionsElement = selectElement.querySelectorAll('option')
  //     for (let i = 0; i < optionsElement.length; i++) {
  //       if (optionsElement[i].value == 3 && optionsElement.textContent == '3 players') {
  //         thirdOptionElement = optionsElement[i];
  //         break;
  //       }
  //     }
  //   })
  //   thirdOptionElement.selected = true;

  //   const eventName = 'startNewGame';
  //   const secondsToWaitForEvent = 10;
  //   let eventDetected = false;
  //   let eventDetailValue = -1;
  
  //   // add event listener and wait for event to fire before returning
  //   await page.evaluate(function(eventName) {
  //         window.addEventListener(eventName, function(e) {
  //           eventDetected = true;
  //           eventDetailValue = e.detail.value || -1;
  //           console.log('cought event')
  //         });
  //   });

  //   page.evaluate(() => {
  //     const elem = document.querySelector('button')
  //     elem.addEventListener('click', () => {
  //       eventDetected = true
  //       eventDetailValue = -3
  //     })
  //   })
    

  //   // "click" the button
  //   const buttonElement = await page.$('button')
  //   await page.click('button')



  //   expect(eventDetected).toBe(true);
  //   expect(eventDetailValue).toBe(3);

  // }, 100000)
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
  
}, 100000);
