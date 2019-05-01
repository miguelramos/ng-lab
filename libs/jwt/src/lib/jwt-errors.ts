/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { ErrorDetails } from '@ng-lab/support';

export class JWTIllegalBaseDecodeError extends Error {
  /**
   * The validation error type.
   *
   * @see PropertyError
   */
  type: string;
  details: ErrorDetails | undefined;

  /**
   * Construct a property validation error.
   *
   * @param type The validation error type.
   * @param message The error message.
   */
  constructor(type: string, message: string, details?: ErrorDetails) {
    super(message);

    this.name = 'JWTIllegalBaseDecodeError';
    this.stack = new Error().stack;
    this.type = type;
    this.details = details;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = JWTIllegalBaseDecodeError.prototype;
  }
}

export class JWTAtobDecodeError extends Error {
  /**
   * The validation error type.
   *
   * @see PropertyError
   */
  type: string;
  details: ErrorDetails | undefined;

  /**
   * Construct a property validation error.
   *
   * @param type The validation error type.
   * @param message The error message.
   */
  constructor(type: string, message: string, details?: ErrorDetails) {
    super(message);

    this.name = 'JWTAtobDecodeError';
    this.stack = new Error().stack;
    this.type = type;
    this.details = details;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = JWTAtobDecodeError.prototype;
  }
}

export class JWTSplitDecodeError extends Error {
  /**
   * The validation error type.
   *
   * @see PropertyError
   */
  type: string;
  details: ErrorDetails | undefined;

  /**
   * Construct a property validation error.
   *
   * @param type The validation error type.
   * @param message The error message.
   */
  constructor(type: string, message: string, details?: ErrorDetails) {
    super(message);

    this.name = 'JWTSplitDecodeError';
    this.stack = new Error().stack;
    this.type = type;
    this.details = details;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = JWTSplitDecodeError.prototype;
  }
}
