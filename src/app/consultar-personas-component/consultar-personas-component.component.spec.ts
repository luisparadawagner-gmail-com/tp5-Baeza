import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPersonasComponentComponent } from './consultar-personas-component.component';

describe('ConsultarPersonasComponentComponent', () => {
  let component: ConsultarPersonasComponentComponent;
  let fixture: ComponentFixture<ConsultarPersonasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPersonasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPersonasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
