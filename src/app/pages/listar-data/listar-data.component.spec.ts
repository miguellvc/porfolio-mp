import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDataComponent } from './listar-data.component';

describe('ListarDataComponent', () => {
  let component: ListarDataComponent;
  let fixture: ComponentFixture<ListarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
