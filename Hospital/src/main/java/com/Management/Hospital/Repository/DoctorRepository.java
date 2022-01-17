package com.Management.Hospital.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.Management.Hospital.Entity.Doctor;
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {

}
