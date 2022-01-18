import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorserviceService } from '../doctorservice.service';

import { DoctorbyidComponent } from './doctorbyid.component';

describe('DoctorbyidComponent', () => {
  let component: DoctorbyidComponent;
  let fixture: ComponentFixture<DoctorbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[DoctorserviceService],
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
