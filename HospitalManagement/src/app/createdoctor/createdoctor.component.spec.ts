import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';

import { CreatedoctorComponent } from './createdoctor.component';

describe('CreatedoctorComponent', () => {
  let component: CreatedoctorComponent;
  let fixture: ComponentFixture<CreatedoctorComponent>;
let service:DoctorserviceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ CreatedoctorComponent ],
      providers:[DoctorserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});
