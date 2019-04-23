import { async, TestBed } from '@angular/core/testing';

import { HubModule } from './hub.module';
import { HubService } from './hub.service';

describe('> HubModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HubModule]
    }).compileComponents();
  }));

  it('# Should have HubModule defined.', () => {
    expect(HubModule).toBeDefined();
  });

  it('# Should have HubService on dependency injector.', () => {
    const service = TestBed.get(HubService, null);

    expect(typeof service === 'object').toBeTruthy();
  });
});
