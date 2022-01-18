import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorbyidComponent } from '../doctorbyid/doctorbyid.component';
import { DoctorserviceService } from '../doctorservice.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors!: Doctor[];
  id!: number;
  doctor: any;
  constructor(private doctorservice:DoctorserviceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctors()
    this.getdoctorbyid(this.id)
  }
  private getDoctors() {
    this.doctorservice.getDoctorsList().subscribe(data=>{
      this.doctors=data;
    })
  }
  getdoctorbyid(id: number)
  {
    this.router.navigate(['DoctorById', id])
    // this.doctorservice.getDoctorbyid(this.id).subscribe( data => {
    //   this.doctor = data;
    //   console.log(this.doctor.did)
  };
}



