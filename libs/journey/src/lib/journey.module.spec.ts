import { async, TestBed } from '@angular/core/testing';
import { JourneyModule } from './journey.module';
import { JourneyService } from './journey.service';

describe('> JourneyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JourneyModule.forRoot()]
    }).compileComponents();
  }));

  it('# Should have module defined.', () => {
    expect(JourneyModule).toBeDefined();
  });

  it('# Should have JourneyService on dependency injector.', () => {
    const service = TestBed.inject(JourneyService, null);

    expect(typeof service === 'object').toBeTruthy();
  });
});
