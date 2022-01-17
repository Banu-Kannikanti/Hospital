package com.Management.Hospital.Controller;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Management.Hospital.Entity.Patient;
import com.Management.Hospital.Exception.ResourceNotFoundException;
import com.Management.Hospital.Repository.DoctorRepository;
import com.Management.Hospital.Repository.PatientRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/V1")
public class PatientController {
	@Autowired
	PatientRepository patientrepository;
	@Autowired
	DoctorRepository doctorrepository;
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient> getpatient(@PathVariable int id)
	{
		Patient patient=patientrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
		System.out.println(patient);
		return ResponseEntity.ok(patient);
	}
	@GetMapping("/patients")
	public List<Patient> getpatients()
	{
		return patientrepository.findAll();
	}
	@PostMapping("/patients")
	public Patient createpatient(@Valid @RequestBody Patient patient)
	{
		Patient patient1=patientrepository.save(patient);
        return patient1;

		
	}
}

