package com.Management.Hospital;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.Management.Hospital.Entity.Doctor;
import com.Management.Hospital.Entity.Patient;
import com.Management.Hospital.Repository.DoctorRepository;
import com.Management.Hospital.Repository.PatientRepository;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class HospitalApplicationTests {
	Doctor doctor;
	Patient patient;
			@Autowired
			PatientRepository pr;
			@Autowired
			DoctorRepository dr;
			@BeforeAll
		    public static void setupAll() {
		        System.out.println("Should Print Before All Tests");
		    }

		    @BeforeEach
		    public void setup() {
		        System.out.println("Instantiating Contact Manager");
		       doctor=new Doctor();
		       patient=new Patient();
		    }
			@Test
			@Order(1)
			void CreateDoctorTest() {
				doctor.setDid(1);
				doctor.setAge(33);
				doctor.setGender("Female");
				doctor.setName("Priya");
				doctor.setSpecialist_field("Dental");
				dr.save(doctor);
				assertNotNull(dr.getById(1));
			}
		
			@Test
			@Order(2)
			public void testRead() {
				Doctor doctor = dr.findById(1).get();
				assertEquals("Priya", doctor.getName());
			}
			@Test
			@Order(4)
			public void testPatientRead() {
				Patient patient= pr.findById(2).get();
				assertEquals("Hari", patient.getName());
			}
			@Test
			@Order(3)
			void CreatePatientTest() {
				doctor.setDid(1);
				patient.setDoctor(doctor);
				patient.setAge(33);
				patient.setDateOfVisit("11-2-2022");
				patient.setName("Hari");
				patient.setPrescription("Dolo");
				pr.save(patient);
				assertNotNull(pr.getById(1));
			}
			
			@AfterEach
		    public void tearDown() {
		        System.out.println("Should Execute After Each Test");
		    }

		    @AfterAll
		    public static void tearDownAll() {
		        System.out.println("Should be executed at the end of the Test");
		    }

	}

