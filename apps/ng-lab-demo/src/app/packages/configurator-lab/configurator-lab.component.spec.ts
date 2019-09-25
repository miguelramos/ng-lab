import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorLabComponent } from './configurator-lab.component';

describe('ConfiguratorLabComponent', () => {
  let component: ConfiguratorLabComponent;
  let fixture: ComponentFixture<ConfiguratorLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguratorLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
