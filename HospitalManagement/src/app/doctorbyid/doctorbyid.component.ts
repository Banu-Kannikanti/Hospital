import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-doctorbyid',
  templateUrl: './doctorbyid.component.html',
  styleUrls: ['./doctorbyid.component.css']
})
export class DoctorbyidComponent implements OnInit {
  id!: number;
  doctor!: any;
  constructor(private route: ActivatedRoute,private doctorservice:DoctorserviceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doctor=new Doctor();
    this.doctorservice.getDoctorbyid(this.id).subscribe( data => {
      this.doctor = data;
  });

  }
}
