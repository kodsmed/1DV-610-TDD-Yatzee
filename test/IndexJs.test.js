import { JSDOM } from 'jsdom';
import fs from 'fs';
import path, { dirname }  from 'path';

describe('index.js', () => {
  let htmlDoc;
  let window;

  beforeAll(async () => {
    const htmlDom = await JSDOM.fromFile('./serve/index.html', { 
      runScripts: "dangerously",
      resources: "usable",
    });

    window = htmlDom.window;
    htmlDoc = window.document;

    const scriptPath = path.resolve('./serve/compiled-js/index.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf-8');
    const scriptEl = htmlDoc.createElement('script');
    scriptEl.textContent = scriptContent;
    htmlDoc.body.appendChild(scriptEl);

    // Wait for the script to be executed
    await new Promise((resolve) => {
      window.onload = resolve;
    });

    htmlDoc = window.document;
  });

  it('should hide the name input until number of players have been selected', () => {
    const inputElement = htmlDoc.querySelector('#playerName');
    expect(inputElement.style.display).toBe('none');
  });

  it('should set the textContent of the submit button to "Start"', () => {
    const buttonElement = htmlDoc.querySelector('button');
    expect(buttonElement.textContent).toBe('Start');
  })
});