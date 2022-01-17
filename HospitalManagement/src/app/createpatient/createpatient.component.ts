import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
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
  constructor(private patientservice:PatientserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  savePatient()
  {
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
}
