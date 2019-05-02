import { TestBed } from '@angular/core/testing';

import { UrlModule } from './url.module';
import { UrlService } from './url.service';
import { UrlEmptyError } from './url.errors';
import { ConfigOptions, ConfiguratorModule, ConfiguratorService } from '@ng-lab/configurator';

describe('> UrlService', () => {
  let httpUrlService: UrlService;
  const config: ConfigOptions = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguratorModule.forRoot(config), UrlModule]
    }).compileComponents();

    httpUrlService = TestBed.get(UrlService, 'NOT FOUND');
  });

  it('# Should get defined urls', () => {
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
  });

  it('# Should throw if ConfiguratorService has no ENDPOINTS property', () => {
    try {
      // tslint:disable-next-line:no-unused-expression
      new UrlService(new ConfiguratorService())
    } catch (error) {
      expect(error).toThrow(UrlEmptyError);
    }
  });
});
