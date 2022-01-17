package com.Management.Hospital.Entity;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Doctor {
	@Id
	@GeneratedValue
	private int did;
	private String name;
	private int age;
	private String gender;
	private String specialist_field;
	@OneToMany(mappedBy="doctor")
	private List<Patient> patients=new ArrayList<>();
	public Doctor() {
		super();
	}
	public Doctor(int did, String name, int age, String gender, String specialist_field, List<Patient> patients) {
		super();
		this.did = did;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.specialist_field = specialist_field;
		this.patients = patients;
	}
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getSpecialist_field() {
		return specialist_field;
	}
	public void setSpecialist_field(String specialist_field) {
		this.specialist_field = specialist_field;
	}
	public int getPatients() {
		return patients.size();
	}
	
	public void setPatients(List<Patient> patients) {
		this.patients = patients;
	}
	
}

