import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonaComponentComponent } from './crear-persona-component.component';

describe('CrearPersonaComponentComponent', () => {
  let component: CrearPersonaComponentComponent;
  let fixture: ComponentFixture<CrearPersonaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPersonaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
