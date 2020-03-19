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
  const chars = '0123456789abcdef'.split('');
  const uuid = [],
    rnd = Math.random;
  let r = null;

  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4'; // version 4

  for (let i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | (rnd() * 16);

      uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r & 0xf];
    }
  }

  return uuid.join('');
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

/**
 * Flatten a deep object into a one level object with it’s path as key
 */
export function flatten(object: object, prefix = '', separator = '.') {
  return Object.keys(object).reduce((prev, element) => {
    return object[element] &&
      typeof object[element] === 'object' &&
      !Array.isArray(element)
      ? {
          ...prev,
          ...flatten(object[element], `${prefix}${element}${separator}`)
        }
      : { ...prev, ...{ [`${prefix}${element}`]: object[element] } };
  }, {});
}

/**
 * Split an array in x size chunks.
 */
export function chunk(collection: any[], size: number) {
  if (!collection.length) {
    return [];
  }
  const head = collection.slice(0, size);
  const tail = collection.slice(size);

  return [head, ...chunk(tail, size)];
};
