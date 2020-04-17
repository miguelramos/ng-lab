import { TestBed } from '@angular/core/testing';

import { SCRIPTS_LOADER } from './http-script.token';
import { HttpScriptModule } from './http-script.module';
import { HttpScriptLoaderService } from './http-script.service';

describe('> HttpScriptLoaderService', () => {
  let httpScriptService: HttpScriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpScriptModule],
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
    }).compileComponents();

    httpScriptService = TestBed.inject(HttpScriptLoaderService);
  });

  it('# Should have register scripts', () => {
    expect(httpScriptService.hasScript('analytics')).toBeTruthy();
    expect(httpScriptService.hasScript('ace')).toBeTruthy();
  });

  it('# Should load script and trigger load event', (done) => {
    jest.setTimeout(15000);

    httpScriptService.load({
      name: 'animejs',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js',
      loaded: false
    }).subscribe(() => {
      expect(httpScriptService.isLoaded('animejs')).toBeTruthy();
      done();
    });

    const tags = document.getElementsByTagName('script');
    const animejsTag = tags.item(tags.length - 1);

    animejsTag.dispatchEvent(new Event('load'));
  });
});
