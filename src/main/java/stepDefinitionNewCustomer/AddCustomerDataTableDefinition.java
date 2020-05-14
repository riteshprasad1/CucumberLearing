package stepDefinitionNewCustomer;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class AddCustomerDataTableDefinition {

WebDriver driver;
	
	@Given("^user is already on login page$")
	
	public void user_is_already_on_login_page()
	{
		WebDriverManager.chromiumdriver().setup();
		  ChromeOptions options = new  ChromeOptions(); 
		  options.addArguments("--ignore-certificate-errors"); 
		  driver  = new ChromeDriver(options);
		driver.get("https://demo.guru99.com/V4/index.php");
	}
	@SuppressWarnings("deprecation")
	@When("^title of login page is Guru99$")
	
	public void title_of_login_page_is_Guru99() {
		String pageTitle = driver.getTitle();
		Assert.assertEquals("Guru99 Bank Home Page", pageTitle);
	}
	@Then("^user enter username and password$")
	public void user_enter_username_and_password(DataTable credentials) {
		List<List<String>> user = credentials.raw();
	    driver.findElement(By.name("uid")).sendKeys(user.get(0).get(0));
	    driver.findElement(By.name("password")).sendKeys(user.get(0).get(1));
	}
	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.name("btnLogin")).click();
	}
	@Then("^user is on home page$") 
	 public void user_is_on_home_page() throws Throwable { 
		 String homepage = driver.getTitle();
	 Assert.assertEquals("Guru99 Bank Manager HomePage", homepage);
	 //driver.quit();
	 }
	 @Then("^user clicks on new customer link$")
	 public void user_clicks_on_new_customer_link() throws Throwable {
	     driver.findElement(By.xpath("//a[contains(text(),'New Customer')]")).click();
	   
	 }
	 @Then("^user enters name and gender and dd and mm and yyyy$")
	 public void user_enters_newcustomerdetails(DataTable customerData) throws InterruptedException
	 {
		 List<List<String>> newData =  customerData.raw();
		 
		driver.findElement(By.name("name")).sendKeys(newData.get(0).get(0));
	    driver.findElement(By.name("rad1")).sendKeys(newData.get(0).get(1));
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(newData.get(0).get(2));
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(newData.get(0).get(3));
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(newData.get(0).get(4));
	    Thread.sleep(10000);
	    
	 }
	 @Then("^close the browser$")
	 public void close_the_browser() throws Throwable {
	   driver.quit();
	 }
	 
}
