/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { ErrorDetails } from '@ng-lab/support';

export class HttpUrlResolverValidationError extends Error {
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

    this.name = 'HttpUrlResolverValidationError';
    this.stack = new Error().stack;
    this.type = type;
    this.details = details;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = HttpUrlResolverValidationError.prototype;
  }
}

export class HttpUrlResolverTestError extends Error {
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

    this.name = 'HttpUrlResolverTestError';
    this.stack = new Error().stack;
    this.type = type;
    this.details = details;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = HttpUrlResolverTestError.prototype;
  }
}

export class HttpUrlEmptyError extends Error {
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

    this.name = 'HttpUrlEmptyError';
    this.stack = new Error().stack;
    this.type = type;
    this.details = details;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = HttpUrlEmptyError.prototype;
  }
}
