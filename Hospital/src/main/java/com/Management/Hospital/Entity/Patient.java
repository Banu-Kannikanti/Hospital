package com.Management.Hospital.Entity;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Patient {
	@Id
	@GeneratedValue
	int pid;
	int age;
	String name ;
	String dateOfVisit= new SimpleDateFormat("dd-mm-yyyy").format(new Date());
	 @Column(insertable=false)
	String prescription;
	@ManyToOne()
	@JoinColumn(name="d_id",nullable=false,referencedColumnName = "did")
	private Doctor doctor;
	public Patient(int pid, int age, String name, String dateOfVisit, String prescription, Doctor doctor) {
		super();
		this.pid = pid;
		this.age = age;
		this.name = name;
		this.dateOfVisit = dateOfVisit;
		this.prescription = prescription;
		this.doctor = doctor;
	}
	public Patient() {
		super();
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDateOfVisit() {
		return dateOfVisit;
	}
	public void setDateOfVisit(String dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPrescription() {
		return prescription;
	}
	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
	@Override
	public String toString() {
		return "Patient [pid=" + pid + ", age=" + age + ", name=" + name + ", dateOfVisit=" + dateOfVisit
				+ ", prescription=" + prescription + ", doctor=" + doctor + "]";
	}
	
	
	
	
}
