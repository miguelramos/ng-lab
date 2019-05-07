import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { ResponsiveBreakpointDirective } from './responsive.directive';
import {
  RESPONSIVE_BREAKPOINTS_TOKEN,
  DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN
} from './responsive.token';

@Component({
  selector: 'ng-lab-dumb',
  template: '<p ngResponsive>Testing Directives is awesome!</p>'
})
export class TestComponent {
  @ViewChild(ResponsiveBreakpointDirective, {
    read: ResponsiveBreakpointDirective,
    static: true
  })
  responsiveDirective: ResponsiveBreakpointDirective;

  constructor(private _elRef: ElementRef) {}
}

describe('> ResponsiveBreakpointDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveBreakpointDirective, TestComponent],
      providers: [
        {
          provide: RESPONSIVE_BREAKPOINTS_TOKEN,
          useValue: DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('# Should create TestComponent.', () => {
    expect(component).toBeDefined();
  });

  it('# Should listen to window resize changes.', async () => {
    expect.assertions(1);

    component.responsiveDirective.responsiveChange.subscribe(change => {
      expect(change).toEqual({ width: 500, key: 'XS' });
    });
    // Change the viewport to 500px.
    (window as any).innerWidth = 500;
    // Trigger the window resize event.
    window.dispatchEvent(new Event('resize'));
  });
});
