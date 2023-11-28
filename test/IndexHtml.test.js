import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder
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
});