import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  doctor: Doctor=new Doctor();
  constructor(private doctorservice:DoctorserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  saveDoctor(){
    this.doctorservice.createDoctor(this.doctor).subscribe(data=>{
      console.log(data);
      this.goToDoctorsList();
    },
      error => console.log(error));
  }
  goToDoctorsList(){
    this.router.navigate(['/Doctors']);
  }
onSubmit()
{
this.saveDoctor();
}
}
