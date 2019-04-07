/**
* @license
* Copyright NgLab All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://www.ng-lab.com/license
*/

/**
 * Create unique UUID
 *
 * @export
 * @returns string
 */
export function uniqueID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Function to check if a number is between interval
 *
 * @export
 * @param {number} num
 * @param {number} min
 * @param {number} max
 * @param {boolean} [inclusive=true]
 * @returns {boolean}
 */
export function between(
  num: number,
  min: number,
  max: number,
  inclusive = true
): boolean {
  const minValue = Math.min.apply(Math, [min, max]);
  const maxValue = Math.max.apply(Math, [min, max]);

  return inclusive
    ? num >= minValue && num <= maxValue
    : num > minValue && num < maxValue;
}

/**
 * Get the hostname/domain from a url.
 *
 * @export
 * @param {string} url
 * @returns {string}
 */
export function getUrlHostname(url: string): string {
  let hostname = '';

  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  hostname = hostname.split(':')[0];

  return hostname;
}
