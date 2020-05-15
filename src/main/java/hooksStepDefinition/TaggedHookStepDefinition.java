package hooksStepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHookStepDefinition {
	//Global hooks
	@Before(order=0)
	public void setUp0() {
		
		System.out.println("Inside Global hook setUp0");
	}
	
	@After(order=0)
	public void tearDown0() {
		
		System.out.println("Inside Global hook tearDown0");
	}
	
	
	@Before(order=1)
	public void setUp01() {
		
		System.out.println("Inside Global hook setUp01");
	}
	
	@After(order=1)
	public void tearDown01() {
		
		System.out.println("Inside Global hook tearDown01");
	}
	
	@Before("@First")
	public void setUp00() {
		
		System.out.println("Inside Global hook setUp0.. before first");
	}
	
	@After("@First")
	public void tearDown00() {
		
		System.out.println("Inside Global hook tearDown0 ...after first");
	}
	
	
	
	
	
	@Given("^this is the first step$")
	public void this_is_the_first_step() throws Throwable {
	System.out.println("1st Step");  
	}

	@When("^this is the second step$")
	public void this_is_the_second_step() throws Throwable {
		System.out.println("2nd Step");   
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() throws Throwable {
		System.out.println("3rd Step");
	}



}
