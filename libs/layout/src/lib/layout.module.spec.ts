import { async, TestBed } from '@angular/core/testing';
import { LayoutModule } from './layout.module';

describe('> LayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutModule]
    }).compileComponents();
  }));

  it('# Should have module defined.', () => {
    expect(LayoutModule).toBeDefined();
  });
});
