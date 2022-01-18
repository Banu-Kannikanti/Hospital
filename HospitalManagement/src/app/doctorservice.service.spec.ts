import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DoctorserviceService } from './doctorservice.service';

describe('DoctorserviceService', () => {
  let service: DoctorserviceService;
  let http:HttpClient;
  let httpController:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DoctorserviceService]
    });
    service = TestBed.inject(DoctorserviceService);
    http=TestBed.inject(HttpClient);
    httpController=TestBed.inject(HttpTestingController)
  });

  it('Doctor Service should be created', () => {
    expect(service).toBeTruthy();
  });
});
