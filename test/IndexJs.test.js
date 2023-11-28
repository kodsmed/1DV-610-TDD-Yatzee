import { JSDOM } from 'jsdom';

describe('index.js', () => {
  let htmlDoc;

  beforeAll(async () => {
    const htmlDom = await JSDOM.fromFile('./serve/index.html');
    htmlDoc = htmlDom.window.document;
  })

  it('should hide the name input until number of players have been selected', () => {
    const inputElement = htmlDoc.querySelector('#playerName');
    expect(inputElement.style.display).toBe('none');
  })
})