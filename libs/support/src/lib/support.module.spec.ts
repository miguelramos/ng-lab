import { async, TestBed } from '@angular/core/testing';
import { SupportModule } from './support.module';

describe('SupportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SupportModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SupportModule).toBeDefined();
  });
});
