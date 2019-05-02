import { async, TestBed } from '@angular/core/testing';
import { HttpScriptModule } from './http-script.module';

describe('HttpScriptModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpScriptModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HttpScriptModule).toBeDefined();
  });
});
