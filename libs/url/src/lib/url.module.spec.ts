import { async, TestBed } from '@angular/core/testing';
import { UrlModule } from './url.module';

describe('UrlModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UrlModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UrlModule).toBeDefined();
  });
});
