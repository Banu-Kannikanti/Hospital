import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PatientserviceService } from './patientservice.service';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Patient } from './patient';


describe('PatientserviceService', () => {
  let service: PatientserviceService;
  let http:HttpClient;
  let httpController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PatientserviceService]
    });
    service = TestBed.inject(PatientserviceService);
    http=TestBed.inject(HttpClient);
    httpController=TestBed.inject(HttpTestingController)
  });

  it('Patient Service should be created', () => {
    expect(service).toBeDefined();
  });
 
});
