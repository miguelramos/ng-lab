import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { LayoutModule } from './layout.module';
import { LayoutAreaComponent } from './layout-area.component';
import { Component } from '@angular/core';
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
    >
      <p>My layout</p>
    </ui-layout-area>
  `
})
class HostComponent {}

describe('> LayoutAreaComponent', () => {
  let component: LayoutAreaComponent;
  let fixture: ComponentFixture<LayoutAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAreaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('# Should have instantiate', () => {
    expect(component).toBeDefined();
  });

  it('# Should define properties', () => {
    expect(component.display).toEqual('flex');
    expect(component.flexDirection).toEqual('column');

    component.justifyContent = 'center';
    component.flexWrap = 'wrap';
    component.alignItems = 'center';
    component.alignContent = 'center';
    component.width = '10px';
    component.height = '10px';
    component.padding = '2px 10px';
    component.margin = '2px 10px';
    component.flexBasis = '10px';
    component.flexGrow = 1;
    component.flexShrink = 3;
    component.order = 1;
    component.alignSelf = 'center';

    expect(component.justifyContent).toEqual('center');
    expect(component.flexWrap).toEqual('wrap');
    expect(component.alignItems).toEqual('center');
    expect(component.alignContent).toEqual('center');
    expect(component.width).toEqual('10px');
    expect(component.height).toEqual('10px');
    expect(component.padding).toEqual('2px 10px');
    expect(component.margin).toEqual('2px 10px');
    expect(component.flexBasis).toEqual('10px');
    expect(component.flexGrow).toEqual(1);
    expect(component.flexShrink).toEqual(3);
    expect(component.order).toEqual(1);
    expect(component.alignSelf).toEqual('center');
  });

  it('# Should have style properties', () => {
    component.justifyContent = 'center';
    component.flexWrap = 'wrap';
    component.alignItems = 'center';
    component.alignContent = 'center';
    component.width = '10px';
    component.height = '10px';
    component.padding = '2px 10px';
    component.margin = '2px 10px';
    component.flexBasis = '10px';
    component.flexGrow = 1;
    component.flexShrink = 3;
    component.order = 1;
    component.alignSelf = 'center';

    fixture.detectChanges();

    expect((<HTMLElement>fixture.nativeElement).style.justifyContent).toEqual('center');
    expect((<HTMLElement>fixture.nativeElement).style.flexWrap).toEqual('wrap');
    expect((<HTMLElement>fixture.nativeElement).style.alignItems).toEqual('center');
    expect((<HTMLElement>fixture.nativeElement).style.alignContent).toEqual('center');
    expect((<HTMLElement>fixture.nativeElement).style.width).toEqual('10px');
    expect((<HTMLElement>fixture.nativeElement).style.height).toEqual('10px');
    expect((<HTMLElement>fixture.nativeElement).style.padding).toEqual('2px 10px');
    expect((<HTMLElement>fixture.nativeElement).style.margin).toEqual('2px 10px');
    expect((<HTMLElement>fixture.nativeElement).style.flexBasis).toEqual('10px');
    expect((<HTMLElement>fixture.nativeElement).style.flexGrow).toEqual('1');
    expect((<HTMLElement>fixture.nativeElement).style.flexShrink).toEqual('3');
    expect((<HTMLElement>fixture.nativeElement).style.order).toEqual('1');
    expect((<HTMLElement>fixture.nativeElement).style.alignSelf).toEqual('center');
  });
});

describe('> Mock LayoutAreaComponent', () => {
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

  it('# Should have style defined.', () => {
    const cmp = fixture.debugElement.query(By.css('ui-layout-area'));

    expect((<HTMLElement>cmp.nativeElement).style.justifyContent).toEqual('center');
    expect((<HTMLElement>cmp.nativeElement).style.flexWrap).toEqual('wrap');
    expect((<HTMLElement>cmp.nativeElement).style.alignItems).toEqual('center');
    expect((<HTMLElement>cmp.nativeElement).style.alignContent).toEqual('center');
    expect((<HTMLElement>cmp.nativeElement).style.width).toEqual('10px');
    expect((<HTMLElement>cmp.nativeElement).style.height).toEqual('10px');
    expect((<HTMLElement>cmp.nativeElement).style.padding).toEqual('2px 10px');
    expect((<HTMLElement>cmp.nativeElement).style.margin).toEqual('2px 10px');
    expect((<HTMLElement>cmp.nativeElement).style.flexBasis).toEqual('10px');
    expect((<HTMLElement>cmp.nativeElement).style.flexGrow).toEqual('1');
    expect((<HTMLElement>cmp.nativeElement).style.flexShrink).toEqual('3');
    expect((<HTMLElement>cmp.nativeElement).style.order).toEqual('1');
    expect((<HTMLElement>cmp.nativeElement).style.alignSelf).toEqual('center');

    expect(cmp.componentInstance.justifyContent).toEqual('center');
    expect(cmp.componentInstance.flexWrap).toEqual('wrap');
    expect(cmp.componentInstance.alignItems).toEqual('center');
    expect(cmp.componentInstance.alignContent).toEqual('center');
    expect(cmp.componentInstance.width).toEqual('10px');
    expect(cmp.componentInstance.height).toEqual('10px');
    expect(cmp.componentInstance.padding).toEqual('2px 10px');
    expect(cmp.componentInstance.margin).toEqual('2px 10px');
    expect(cmp.componentInstance.flexBasis).toEqual('10px');
    expect(cmp.componentInstance.flexGrow).toEqual('1');
    expect(cmp.componentInstance.flexShrink).toEqual('3');
    expect(cmp.componentInstance.order).toEqual('1');
    expect(cmp.componentInstance.alignSelf).toEqual('center');
  });
});
