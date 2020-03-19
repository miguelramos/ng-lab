### API

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
| `setOption(name: string, value: any): void` | | *Set an option on config.* |
| `getOption<O>(name: string, defaults: any = null): O` | | *Get an option from config and set is type.* |
| `getOptionTree<T>(rootKey: string, fromRoot: boolean = true): T` | | *Get a tree of options and set it's type.* |
| | `get options(): ConfigOptions` | *Collection of options (getter).* |
| | `set options(opt: ConfigOptions)` | *Set property of options (setter).* |
| `reset(): void` | | *Reset options to empty object.* |
| `hasOption(name: string): boolean` | | *Verify if option exist.* |

</div>

### How to use

Import module on main application module, and then set the initial options you want to register on the config instance.

```typescript
import { ConfiguratorModule } from '@ng-lab/configurator';

const CONFIG = {
  ENV: environment,
  PRODUCTION: environment.production,
  DOMAINS_API: [
    { HOST: '', KEY: '@local' },
    { HOST: '', KEY: '@origin', ORIGIN: true },
    { HOST: environment.api, KEY: '@api' }
  ],
  ENDPOINTS: {}
};

@NgModule({
  imports: [
    ConfiguratorModule.forRoot(CONFIG),
  ],
  exports: [
    ConfiguratorModule
  ]
})
export class ApplicationProvisionModule {}
```

Configurator service can then been called on other services/components and use dot notation to get deep options from the tree.

```typescript
const configuratorService: ConfiguratorService = new ConfiguratorService();

const settings = {
  one: 1,
  setting: 2,
  with: {
    deep: {
      notation: 3
    }
  }
};

configuratorService.setOption('settings', settings);
configuratorService.hasOption('settings.with.deep.notation');
configuratorService.getOption<number>('settings.with.deep.notation');
```
