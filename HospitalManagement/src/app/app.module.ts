import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorbyidComponent } from './doctorbyid/doctorbyid.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatedoctorComponent,
    CreatepatientComponent,
    DoctorsComponent,
    PatientsComponent,
   DoctorsComponent,
   DoctorbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function MathDatePickerModule(MathDatePickerModule: any) {
  throw new Error('Function not implemented.');
}

