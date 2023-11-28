import { JSDOM } from 'jsdom';

describe('index.html', () => {
  let document;

  beforeAll(async () => {
    const dom = await JSDOM.fromFile('./serve/index.html')
    document = dom.window.document
  });

  it('should a H1 element with the id "header"', () => {
    const element = document.querySelector('#header');
    expect(element).not.toBeNull();
    expect(element.tagName.toLowerCase()).toBe('h1');
  });

  it('should have a div element with the id dice', () => {
    const element = document.querySelector('#dice');
    expect(element).not.toBeNull();
    expect(element.tagName.toLowerCase()).toBe('div');
  })

  it('should have a div element with the id gameTable', () => {
    const element = document.querySelector('#gameTable');
    expect(element).not.toBeNull();
    expect(element.tagName.toLowerCase()).toBe('div');
  })

  it('should have a div element with the id selectPlayers', () => {
    const element = document.querySelector('#selectPlayers');
    expect(element).not.toBeNull();
    expect(element.tagName.toLowerCase()).toBe('div');
  })

  describe('"selectPlayers division"', () => {
    it('should contain a dropdown select element with the id "numberOfPlayers"', () => {
      const containingDiv = document.querySelector('#selectPlayers');
      const element = containingDiv.querySelector('#numberOfPlayers');
      expect(element).not.toBeNull();
      expect(element.tagName.toLowerCase()).toBe('select');
    })
  })

  it('the select element should have the values and text content 1..4', () => {
    const selectElement = document.querySelector('#numberOfPlayers');
    const options = selectElement.querySelectorAll('option');
    expect(options.length).toBe(4);
    let unexpectedTextContentDetected = false;
    for (let index = 0; index < options.length; index++) {
      if (options[index].textContent != `${index + 1} players`) {
        console.log('enountered unexpected option text in select element:' + options[index].textContent)
        unexpectedTextContentDetected = true;
      }
    }

    expect(unexpectedTextContentDetected).toBe(false);
    
  })
});