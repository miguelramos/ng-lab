import { async, TestBed } from '@angular/core/testing';

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
});
