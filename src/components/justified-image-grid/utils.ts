/* 
SOURCE: https://github.com/ascorbic/unpic-placeholder

The MIT Licence

Copyright 2023 Matt Kane

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

import { decode } from "blurhash";

const toHex = (n: number): string => {
  const hex = n.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + toHex(r) + toHex(g) + toHex(b);
};

// Save some bytes
function percentOrZero(num: number): string | 0 {
  if (num === 0) return 0;
  return `${num}%`;
}

/**
 * Converts raw RGBA pixels to an array of CSS gradients
 */
export function pixelsToCssGradients(pixels: Uint8ClampedArray, columns: number, rows: number): Array<string> {
  const stops: string[] = [];
  for (let i = 0, j = 0; i < pixels.length; i += 4, j++) {
    const col = j % columns;
    const row = Math.floor(j / columns);

    const percentX = Math.round((col / (columns - 1)) * 100);
    const percentY = Math.round((row / (rows - 1)) * 100);

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    // pixels[i+3] is alpha channel, but we don't need it

    const color = `radial-gradient(at ${percentOrZero(
      percentX,
      // Hex is smaller than rgba. #00000000 = transparent
    )} ${percentOrZero(percentY)},${rgbToHex(r, g, b)},#00000000 100%)`;
    stops.push(color);
  }
  return stops;
}

/**
 * Given a blurhash, returns an array of CSS linear-gradient() strings.
 * This is a rough approximation of the blurhash image but as pure CSS.
 * @param blurhash the blurhash string
 * @param columns the number of gradients to generate horizontally. Default is 4
 * @param rows the number of gradients to generate vertically. Default is 3
 */
export function blurhashToCssGradientString(
  blurhash: string,
  columns = 4,
  rows = 3
): string {
  return blurhashToCssGradients(blurhash, columns, rows).join(",");
}

/**
 * Given a blurhash, returns an array of CSS linear-gradient() strings.
 * This is a rough approximation of the blurhash image but as pure CSS.
 * @param blurhash the blurhash string
 * @param columns the number of gradients to generate horizontally. Default is 4
 * @param rows the number of gradients to generate vertically. Default is 3
 */
export function blurhashToCssGradients(
  blurhash: string,
  columns = 4,
  rows = 3
): Array<string> {
  const pixels = decode(blurhash, columns, rows);
  return pixelsToCssGradients(pixels, columns, rows);
}