import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Patient[];
  patient:any;
  id!: number;
  public errormessage:string='';
  constructor(private patientservice:PatientserviceService) { }

  ngOnInit(): void {
    this.getPatients();
 
  }
   public getPatientsByid() {
    this.patient=new Patient();
    let resp= this.patientservice.getPatientByid(this.id).subscribe((data)=>{
      this.patient=data;
    },(error)=>{
     this.errormessage=error;
    });
    }

  private getPatients() {
    this.patientservice.getPatientsList().subscribe(data=>{
      this.patients=data;
    })
  }
}
