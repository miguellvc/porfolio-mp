import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingIconsComponent } from './editing-icons.component';

describe('EditingIconsComponent', () => {
  let component: EditingIconsComponent;
  let fixture: ComponentFixture<EditingIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
