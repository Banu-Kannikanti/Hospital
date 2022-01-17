import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { DoctorbyidComponent } from './doctorbyid/doctorbyid.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {path: 'createpatient', component: CreatepatientComponent},
  {path: 'createdoctor', component: CreatedoctorComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'Doctors', component: DoctorsComponent},
  {path:'DoctorById/:id',component:DoctorbyidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
