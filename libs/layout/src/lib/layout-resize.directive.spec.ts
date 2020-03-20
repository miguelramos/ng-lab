import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LayoutModule } from './layout.module';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'ui-host-for-test',
  template: `
    <ui-layout-area
      display='flex'
      justifyContent='center'
      flexWrap='wrap'
      alignItems='center'
      alignContent='center'
      width='10px'
      height='10px'
      padding='2px 10px'
      margin='2px 10px'
      flexBasis='10px'
      flexGrow='1'
      flexShrink='3'
      order='1'
      alignSelf='center'
      [uiLayoutResizer]="{gutter: 4, edge: 'TOP', color: 'transparent'}"
    ></ui-layout-area>
  `
})
class HostComponent {}

const mouseEvents = {
  get down() {
    const mousedown = document.createEvent('MouseEvent');
    mousedown.initEvent('mousedown', true, true);
    return mousedown;
  },
  get leave() {
    const mouseleave = document.createEvent('MouseEvent');
    mouseleave.initEvent('mouseleave', true, true);
    return mouseleave;
  },
  get up() {
    const mouseup = document.createEvent('MouseEvent');
    mouseup.initEvent('mouseup', true, true);
    return mouseup;
  },
  get move() {
    const mousemove = document.createEvent('MouseEvent');
    mousemove.initEvent('mousemove', true, true);
    return mousemove;
  },
  get hover() {
    const mouseover = document.createEvent('MouseEvent');
    mouseover.initEvent('mouseover', true, true);
    return mouseover;
  }
};

describe('> LayoutAreaComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [LayoutModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('# Should have instantiate', () => {
    expect(component).toBeDefined();
  });

  it('# Should trigger mouse down', (done) => {
    const cmp = fixture.debugElement.query(By.css('ui-layout-area'));
    const element = (<HTMLDivElement>cmp.nativeElement);
    const div = element.querySelector('div');

    div.addEventListener('mousedown', event => {
      expect(event.type).toEqual('mousedown');
      done();
    });

    div.dispatchEvent(mouseEvents.down);
  });

  it('# Should trigger mouse up', (done) => {
    const cmp = fixture.debugElement.query(By.css('ui-layout-area'));
    const element = (<HTMLDivElement>cmp.nativeElement);
    const div = element.querySelector('div');

    div.addEventListener('mouseup', event => {
      expect(event.type).toEqual('mouseup');
      done();
    });

    div.dispatchEvent(mouseEvents.up);
  });

  it('# Should trigger mouse move', fakeAsync(() => {
    const cmp = fixture.debugElement.query(By.css('ui-layout-area'));
    const element = (<HTMLDivElement>cmp.nativeElement);
    const div = element.querySelector('div');

    div.addEventListener('mousemove', event => {
      expect(event.type).toEqual('mousemove');
      expect(event.screenX).toEqual(100);
      expect(event.screenY).toEqual(100);
    });

    const ev = new MouseEvent('mousemove', {
      'view': window,
      'bubbles': true,
      'cancelable': true,
      'screenX': 100,
      'screenY': 100
    });

    div.dispatchEvent(ev);

    tick(16);
  }));
});
