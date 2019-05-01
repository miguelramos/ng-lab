import { async, TestBed } from '@angular/core/testing';
import { HttpUrlModule } from './http-url.module';

describe('HttpUrlModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpUrlModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HttpUrlModule).toBeDefined();
  });
});
