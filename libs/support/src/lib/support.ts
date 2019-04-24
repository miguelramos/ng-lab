/**
* @license
* Copyright NgLab All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://www.ng-lab.com/license
*/

/**
 * Create unique UUID
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

/**
 * Function to check if parameter is a valid number
 */
export function isValidNumber(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
}
