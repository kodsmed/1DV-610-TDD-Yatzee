import { TextEncoder, TextDecoder } from 'util';
import { JSDOM } from 'jsdom';

Object.assign(global, { TextDecoder, TextEncoder });

describe('index.html', () => {
  let document;

  beforeAll(async () => {
    const dom = await JSDOM.fromFile('../serve/index.html')
  });

  it('should a H1 element with the id "header"', () => {
    const element = document.querySelector('#header');
    expect(element).not.toBeNull();
    expect(element.tagName.toLowerCase()).toBe('h1');
  });
});