import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetComponent } from './snippet.component';
import { SnippetHighlightDirective } from './snippet-highlight.directive';

xdescribe('SnippetComponent', () => {
  let component: SnippetComponent;
  let fixture: ComponentFixture<SnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetComponent, SnippetHighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
