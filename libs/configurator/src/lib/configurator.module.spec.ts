import { async, TestBed } from '@angular/core/testing';
import { ConfiguratorModule } from './configurator.module';

describe('ConfiguratorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguratorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConfiguratorModule).toBeDefined();
  });
});
