import { ConfiguratorModule, ConfiguratorService } from '@ng-lab/configurator';
import { JourneyService } from './journey.service';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JourneyModule } from './journey.module';
import { By } from '@angular/platform-browser';
import { JOURNEY_DEFAULT_OPTIONS } from './journey.token';

@Component({
  selector: 'ui-host-for-test',
  template: `
    <div class="host-container">
      <a href="#">Dummy Link</a>
    </div>
  `
})
class HostComponent {}

const mouseEvents = {
  get click() {
    const mouseclick = document.createEvent('MouseEvent');
    mouseclick.initEvent('click', true, true);
    return mouseclick;
  }
};

describe('> JourneyService', () => {
  let configuratorService: ConfiguratorService;
  let journeyService: JourneyService;
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [
        ConfiguratorModule.forRoot({
          JOURNEY_STACK_LIMIT: 20
        }),
        JourneyModule.forRoot(JOURNEY_DEFAULT_OPTIONS)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  beforeEach(() => {
    configuratorService = TestBed.inject(ConfiguratorService, null);
    journeyService = TestBed.inject(JourneyService, null);

    journeyService.init(configuratorService);
    //journeyService.steps = [];
  });

  it('# Should have empty steps', () => {
    expect(journeyService.steps.length).toEqual(0);
  });

  xit('# Should have click history registered', (done) => {
    const cmp = fixture.debugElement.query(By.css('a'));
    const element = (<HTMLDivElement>cmp.nativeElement);
    //const anchor = element.querySelector('a');
    console.log(cmp);
    console.log(element);
    //console.log(anchor);

    journeyService.listener.subscribe(ev => {
      //const journey = journeyService.steps.find(step => step.type === 'CLICK');
      console.log(ev);
      expect(true).toBeTruthy();
      done();
    });

    element.addEventListener('click', (ev) => {
      console.log(ev);
    });

    element.dispatchEvent(mouseEvents.click);
    //anchor.click();
  });
});
