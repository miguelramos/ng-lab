import { ConfiguratorModule, ConfiguratorService } from "@ng-lab/configurator";
import { JourneyModule } from './journey.module';
import { async, TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TrackingHttpRequest } from './tracker.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { JourneyService } from './journey.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { JOURNEY_DEFAULT_OPTIONS } from './journey.token';

describe('> TrackingHttpRequest', () => {
  let configuratorService: ConfiguratorService;
  let journeyService: JourneyService;

  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ConfiguratorModule.forRoot({
          JOURNEY_STACK_LIMIT: 20
        }),
        JourneyModule.forRoot(JOURNEY_DEFAULT_OPTIONS)
      ],
      providers: [
        TrackingHttpRequest,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TrackingHttpRequest,
          multi: true,
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);

    configuratorService = TestBed.inject(ConfiguratorService, null);
    journeyService = TestBed.inject(JourneyService, null);

    journeyService.init(configuratorService);
    journeyService.steps = [];
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('# Should intercept and http error', async(() => {
    httpClient.get('/dummy').pipe(catchError(error => of(error))).subscribe();

    const req = httpMock.expectOne('/dummy');

    req.flush('Simulate unauthorize request', { status: 401, statusText: 'Unauthorized' });

    const journey = journeyService.steps.find(step => step.type === 'REQUEST');

    expect(typeof journey === 'object').toBeTruthy();
  }));

  it('# Should intercept http GET', async(() => {
    httpClient.get('/getDummy').subscribe();

    const req = httpMock.expectOne('/getDummy');

    req.flush('Simulate get request', { status: 200, statusText: 'OK' });

    const journey = journeyService.steps.find(step => step.type === 'REQUEST');

    expect(typeof journey === 'object').toBeTruthy();
  }));

});
