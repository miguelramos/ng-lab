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

@Injectable()
export class HttpScriptLoaderService {
  private _scripts: ScriptInterface[] = [];

  constructor(
    @Inject(DOCUMENT) private _doc: HTMLDocument,
    @Inject(SCRIPTS_LOADER) private _loadScripts: ScriptInterface[]
  ) {
    this._initLoader();
  }

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

  public hasScript(name: string): boolean {
    return !!this._scripts.find(script => script.name === name);
  }

  public isLoaded(name: string): boolean {
    const script = this._scripts.find(js => js.name === name);

    return script ? script.loaded : false;
  }

  private _initLoader(): void {
    this._loadScripts.map(script => this.load(script).subscribe());
  }

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
