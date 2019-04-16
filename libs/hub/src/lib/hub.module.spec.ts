import { async, TestBed } from '@angular/core/testing';
import { HubModule } from './hub.module';

describe('HubModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HubModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HubModule).toBeDefined();
  });
});
