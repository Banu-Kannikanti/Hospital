import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  private baseURL="http://localhost:8081/api/V1/patients";
  constructor(private httpClient: HttpClient) { }
  getPatientsList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }
  getPatientByid(pid:number): Observable<Object>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${pid}`).pipe(
      catchError(this.handleError)
    );
  }
  createPatient(patient:Patient): Observable<Object>{
return this.httpClient.post(`${this.baseURL}`,patient)
  }
  private handleError(error: HttpErrorResponse) {
   let errormessage:string='';
    if (error.status === 0) {
      errormessage='An error occurred:', error.error;
    } else {
      errormessage=
        `No Patient exists in the database with that Id `;
    }
    return throwError(errormessage);
  }
}