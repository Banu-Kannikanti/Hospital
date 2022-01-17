import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorbyidComponent } from './doctorbyid.component';

describe('DoctorbyidComponent', () => {
  let component: DoctorbyidComponent;
  let fixture: ComponentFixture<DoctorbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
