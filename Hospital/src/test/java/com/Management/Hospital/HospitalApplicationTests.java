//package com.Management.Hospital;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//
//import org.junit.jupiter.api.AfterAll;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Order;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.TestMethodOrder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import com.Management.Hospital.Entity.Doctor;
//import com.Management.Hospital.Entity.Patient;
//import com.Management.Hospital.Repository.DoctorRepository;
//import com.Management.Hospital.Repository.PatientRepository;
//import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
//@SpringBootTest
//@TestMethodOrder(OrderAnnotation.class)
//class HospitalApplicationTests {
//	Doctor doctor;
//			@Autowired
//			PatientRepository pr;
//			@Autowired
//			DoctorRepository dr;
//			@BeforeAll
//		    public static void setupAll() {
//		        System.out.println("Should Print Before All Tests");
//		    }
//
//		    @BeforeEach
//		    public void setup() {
//		        System.out.println("Instantiating Contact Manager");
//		       doctor=new Doctor();
//		    }
//			@Test
//			@Order(1)
//			void CreateTest() {
//				doctor.setDid(5);
//				doctor.setAge(33);
//				doctor.setGender("Female");
//				doctor.setName("Priya");
//				doctor.setSpecialist_field("Dental");
//				dr.save(doctor);
//				assertNotNull(dr.getById(5));
//			}
//		
//			@Test
//			@Order(2)
//			public void testRead() {
//				Doctor doctor = dr.findById(5).get();
//				assertEquals("Priya", doctor.getName());
//			}
//			@Test
//			@Order(3)
//			public void testPatientRead() {
//				Patient patient= pr.findById(1).get();
//				assertEquals("Puja", patient.getName());
//			}
//			@AfterEach
//		    public void tearDown() {
//		        System.out.println("Should Execute After Each Test");
//		    }
//
//		    @AfterAll
//		    public static void tearDownAll() {
//		        System.out.println("Should be executed at the end of the Test");
//		    }
//
//	}
//
