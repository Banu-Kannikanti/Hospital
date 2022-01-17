package com.Management.Hospital.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.Management.Hospital.Entity.Patient;
public interface PatientRepository extends JpaRepository<Patient,Integer> {

}
