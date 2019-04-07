import { async, TestBed } from '@angular/core/testing';

import { HubService } from './hub.service';
import { SupportModule } from './support.module';

describe('> SupportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SupportModule]
    }).compileComponents();
  }));

  it('# Should have module defined.', () => {
    expect(SupportModule).toBeDefined();
  });

  it('# Should have HubService on dependency injector.', () => {
    const service = TestBed.get(HubService, null);

    expect(typeof service === 'object').toBeTruthy();
  });
});
