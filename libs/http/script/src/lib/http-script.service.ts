/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

import { Observable, Observer } from 'rxjs';

import { SCRIPTS_LOADER } from './http-script.token';
import { ScriptInterface } from './http-script.typing';

/**
 * @description
 * Service to load remote js scripts
 *
 * @ngModule HttpScriptModule
 * @publicApi
 */
@Injectable()
export class HttpScriptLoaderService {

  /**
   * @description
   * Collection of registered scripts
   *
   * @memberof HttpScriptLoaderService
   */
  private _scripts: ScriptInterface[] = [];

  /**
   * @description
   * Property for HTMLDocument
   *
   * @memberof HttpScriptLoaderService
   */
  private _doc?: Document;

  constructor(
    @Inject(DOCUMENT) doc: any,
    @Inject(SCRIPTS_LOADER) private _loadScripts: ScriptInterface[]
  ) {
    this._doc = doc as Document;
    this._initLoader();
  }

  /**
   * @description
   * Set a ScriptInterface to be loaded
   *
   * @param script Script object to load
   * @memberof HttpScriptLoaderService
   */
  public load(script: ScriptInterface): Observable<ScriptInterface> {
    return new Observable<ScriptInterface>(
      (observer: Observer<ScriptInterface>) => {
        const scriptExist = this._scripts.find(js => js.name === script.name);

        if (scriptExist && scriptExist.loaded) {
          observer.next(scriptExist);
          observer.complete();
        } else {
          this._scripts.push(script);
          this._createHeaderScriptTag(script, observer);
        }
      }
    );
  }

  /**
   * @description
   * Check if script is present on collection
   *
   * @param name Script name
   * @memberof HttpScriptLoaderService
   */
  public hasScript(name: string): boolean {
    return !!this._scripts.find(script => script.name === name);
  }

  /**
   * @description
   * Check if script was loaded
   *
   * @param name Script name
   * @memberof HttpScriptLoaderService
   */
  public isLoaded(name: string): boolean {
    const script = this._scripts.find(js => js.name === name);

    return script ? script.loaded : false;
  }

  /**
   * @description
   * Load initial registered scripts
   *
   * @memberof HttpScriptLoaderService
   */
  private _initLoader(): void {
    this._loadScripts.map(script => this.load(script).subscribe());
  }

  /**
   * @description
   * Creates the header script tag
   *
   * @param script ScriptInterface
   * @param observer Observer<ScriptInterface>
   * @memberof HttpScriptLoaderService
   */
  private _createHeaderScriptTag(
    script: ScriptInterface,
    observer: Observer<ScriptInterface>
  ): void {
    const scriptTag = this._doc.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = script.src;
    scriptTag.async = true;

    scriptTag.addEventListener('load', () => {
      script.loaded = true;
      observer.next(script);
      observer.complete();
    });

    scriptTag.addEventListener('error', () => {
      observer.error(`Cannot load script ${script.name}.`);
    });

    this._doc.getElementsByTagName('body')[0].appendChild(scriptTag);
  }
}
