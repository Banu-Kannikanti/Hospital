import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { Patient } from '../patient';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {
  patient: Patient=new Patient();
  doctors!: Doctor[];
  selectedDoctor!: Doctor;
  constructor(private patientservice:PatientserviceService,private doctorservice:DoctorserviceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  savePatient()
  {
    this.patient.doctor.did=this.selectedDoctor.did;
    this.patientservice.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientsList();
    },
    error => console.log(error));
  }
  goToPatientsList()
  {
this.router.navigate(['/patients'])
  }
  onSubmit()
  {
    console.log(this.patient);
    this.savePatient();
  }
  SetSelectedDoctor(doctor:Doctor):void{
this.selectedDoctor=doctor;
  }
  private getDoctors() {
    this.doctorservice.getDoctorsList().subscribe(data=>{
      this.doctors=data;
    })
  }
}
