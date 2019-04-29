import { async, TestBed } from '@angular/core/testing';
import { ResponsiveModule } from './responsive.module';
import { ResponsiveBreakpointDirective } from './responsive.directive';

describe('> ResponsiveModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ResponsiveModule]
    }).compileComponents();
  }));

  it('# Should have responsible module defined.', () => {
    expect(ResponsiveModule).toBeDefined();
  });

  it('# Should have ResponsiveBreakpointDirective on dependency injector.', () => {
    const service = TestBed.get(ResponsiveBreakpointDirective, null);

    expect(typeof service === 'object').toBeTruthy();
  });
});
