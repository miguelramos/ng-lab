import { async, TestBed } from '@angular/core/testing';
import { ConfiguratorModule } from './configurator.module';
import { ConfiguratorService } from './configurator.service';

describe('> ConfiguratorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguratorModule]
    }).compileComponents();
  }));

  it('# Should have module defined.', () => {
    expect(ConfiguratorModule).toBeDefined();
  });

  it('# Should have ConfiguratorService on dependency injector.', () => {
    const service = TestBed.get(ConfiguratorService, null);

    expect(typeof service === 'object').toBeTruthy();
  });
});
