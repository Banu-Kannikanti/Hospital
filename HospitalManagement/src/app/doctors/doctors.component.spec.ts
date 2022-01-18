import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorserviceService } from '../doctorservice.service';
import { DoctorsComponent } from './doctors.component';
// let mockdoctorlist=[{
//   "did":1,
//   "name":"john",
//   "age":34,
//   "gender":"male",
//   "specialist_field":"ENT"
// }];
xdescribe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[DoctorserviceService],
      declarations: [ DoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //testService=TestBed.get(DoctorserviceService);
  });

//   it('should insert data',() => {
//     component = fixture.debugElement.componentInstance;
//     component.getDoctors();
//    expect(component.getDoctors()).toBeGreaterThan(0);

// });
it('should create', () => {
  expect(component).toBeTruthy();
});
})