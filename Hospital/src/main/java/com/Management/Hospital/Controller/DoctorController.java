package com.Management.Hospital.Controller;
import java.util.List;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Management.Hospital.Entity.Doctor;
import com.Management.Hospital.Repository.DoctorRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/V1")
public class DoctorController {
	@Autowired
	DoctorRepository doctorrepository;
	@PostMapping("/doctors")
	public Doctor createDoctor(@Valid @RequestBody Doctor doctor)
	{
		return doctorrepository.save(doctor);
  
	}
	@GetMapping("/doctors/{id}")
	public Doctor getDocotor(@PathVariable int id)
	{
		Doctor doctor = doctorrepository.findById(id)
				.orElse(null);
		return doctor;
	}
	@GetMapping("/doctors")
	public List<Doctor> getDocotors()
	{
		return  doctorrepository.findAll();
	}
}
