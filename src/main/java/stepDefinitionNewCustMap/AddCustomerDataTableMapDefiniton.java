package stepDefinitionNewCustMap;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
//import junit.framework.Assert;
import org.junit.Assert;

public class AddCustomerDataTableMapDefiniton {

	
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
	
	@When("^title of login page is Guru99$")
	
	public void title_of_login_page_is_Guru99() {
		String pageTitle = driver.getTitle();
		Assert.assertEquals("Guru99 Bank Home Page", pageTitle);
	}
	@Then("^user enter username and password$")
	public void user_enter_username_and_password(DataTable credentials) {
		for(Map<String,String> data : credentials.asMaps(String.class, String.class))
		{
		//List<List<String>> user = credentials.raw();
	    driver.findElement(By.name("uid")).sendKeys(data.get("username"));
	    driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
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
		 for(Map<String,String> data : customerData.asMaps(String.class, String.class))
			{
		 
		driver.findElement(By.name("name")).sendKeys(data.get("name"));
	    driver.findElement(By.name("rad1")).sendKeys(data.get("gender"));
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(data.get("dd"));
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(data.get("mm"));
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(data.get("yyyy"));
	    Thread.sleep(10000);
	    driver.findElement(By.xpath("//a[contains(text(),'New Customer')]")).click();
	   // Thread.sleep(10000);
			}
	    
	 }
	 @Then("^close the browser$")
	 public void close_the_browser() throws Throwable {
	   driver.quit();
	 }
	 
}
