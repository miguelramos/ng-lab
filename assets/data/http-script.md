### API

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
| `load(script: ScriptInterface): Observable<ScriptInterface>` | | *Set a ScriptInterface to be loaded.* |
| `hasScript(name: string): boolean` | | *Check if script is present on collection.* |
| `isLoaded(name: string): boolean` | | *Check if script was loaded.* |

</div>

### How to use

Import module on main application module. HttpScriptModule as token to load initial scripts when module is loaded.

```typescript
import { HttpScriptModule } from '@ng-lab/http-script';

@NgModule({
  imports: [
    HttpScriptModule
  ],
  exports: [
    HttpScriptModule
  ]
})
export class ApplicationProvisionModule {}
```

You can use token to load initial scripts.

```typescript
import { SCRIPTS_LOADER } from '@ng-lab/http-script';

@NgModule({
  imports: [
    HttpScriptModule
  ],
  exports: [
    HttpScriptModule
  ],
  providers: [
    {
      provide: SCRIPTS_LOADER,
      useValue: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/analytics.js/2.9.1/analytics.js',
          name: 'analytics',
          loaded: false
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.4/ace.js',
          name: 'ace',
          loaded: false
        }
      ]
    }
  ]
})
export class ApplicationProvisionModule {}
```

Also you can use http-script service to load on the fly.

```typescript
import { HttpScriptLoaderService } from '@ng-lab/http-script';

httpScriptService.hasScript('analytics');
httpScriptService.hasScript('ace');

httpScriptService.load({
  name: 'animejs',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js',
  loaded: false
}).subscribe(() => {
  httpScriptService.isLoaded('animejs');
});
```
