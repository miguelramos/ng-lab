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
