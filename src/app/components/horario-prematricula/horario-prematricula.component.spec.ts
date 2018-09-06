import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioPrematriculaComponent } from './horario-prematricula.component';

describe('HorarioPrematriculaComponent', () => {
  let component: HorarioPrematriculaComponent;
  let fixture: ComponentFixture<HorarioPrematriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioPrematriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioPrematriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
