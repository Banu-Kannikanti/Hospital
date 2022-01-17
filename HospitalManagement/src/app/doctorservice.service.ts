import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  private baseURL = "http://localhost:8081/api/V1/doctors";
  constructor(private httpClient: HttpClient) { }
  getDoctorsList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
  createDoctor(doctor:Doctor):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
  getDoctorbyid(did: number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${did}`);
  }
}
