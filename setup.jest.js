import { TextEncoder, TextDecoder } from 'util';
export const vitePort = 5173
Object.assign(global, { TextDecoder, TextEncoder, vitePort });