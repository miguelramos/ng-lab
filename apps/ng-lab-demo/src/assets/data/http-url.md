### API

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
| `addRoute(name: string, descriptor: RouteDescriptorType)` | | *Add route to Map.* |
| `get(name: string, params: GenericType = null, domain: string = null): string` | | *Get the route from Map and resolve domain host Pass parameters to complete dynamic arguments on route, even overriding domain host is possible.* |
| `hasRoute(name: string): boolean` | | *Check if route exist in the collection.* |

</div>

### How to use

Import module on main application module. This module as dependency on `@ng-lab/configurator` and it needs to have mandatory
options on configurator to work. Keys used on `DOMAINS_API` are used as prefix to concat main domain to urls. When used `ORIGIN=true`
urls will prepend domain url to url, without this will be relative to domain.

```typescript
import { HttpUrlModule } from '@ng-lab/http-url';
import { ConfiguratorModule } from '@ng-lab/configurator';

const CONFIG = {
  ENDPOINTS: {
    PRODUCT: {
      SIMPLE: '@local:/my/local/endpoint',
      ASSET: '@resource:/assets/product.jpg'
    },
    GOOGLE: '@google:/search=hello',
    API: {
      PARAMS: '@api:/find/:id/product',
      QUERY: '@api:/:category/:group/search=foobar'
    }
  },
  DOMAINS_API: [
    { HOST: '', KEY: '@resource' },
    { HOST: '', KEY: '@local', ORIGIN: true },
    { HOST: 'http://www.google.com', KEY: '@google' },
    { HOST: 'http://api.google.com', KEY: '@api' },
  ]
};

@NgModule({
  imports: [
    ConfiguratorModule.forRoot(CONFIG),
    HttpUrlModule,
  ],
  exports: [
    HttpUrlModule
  ]
})
export class ApplicationProvisionModule {}
```

HttpUrlService can be used on others services (HttpClient for instance).

```typescript
const httpUrlService = new HttpUrlService(new ConfiguratorService());

const localhost = httpUrlService.get('PRODUCT.SIMPLE');
const local = httpUrlService.get('PRODUCT.ASSET');
const google = httpUrlService.get('GOOGLE');
const apiWithParams = httpUrlService.get('API.PARAMS', {id: 1});
const api = httpUrlService.get('API.QUERY', { category: 1, group: 2 });

expect(localhost).toEqual('http://localhost/my/local/endpoint');
expect(local).toEqual('/assets/product.jpg');
expect(google).toEqual('http://www.google.com/search=hello');
expect(apiWithParams).toEqual('http://api.google.com/find/1/product');
expect(api).toEqual('http://api.google.com/1/2/search=foobar');
```
