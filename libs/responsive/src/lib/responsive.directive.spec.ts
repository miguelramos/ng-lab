import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import { ResponsiveBreakpointDirective, RESPONSIVE_BREAKPOINTS_TOKEN, DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN } from './responsive.directive';

@Component({
  template: '<p ngResponsive>Testing Directives is awesome!</p>'
})
class TestComponent {
  @ViewChild(ResponsiveBreakpointDirective, { read: ResponsiveBreakpointDirective })
  responsiveDirective: ResponsiveBreakpointDirective;

  constructor(
    private _elRef: ElementRef
  ) { }
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
