package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on login page$")
	
	public void user_is_already_on_login_page() {
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
	
	@Then("^user enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_password(String username, String password) throws Throwable {
	    driver.findElement(By.name("uid")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
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

	 @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_enters_newcustomerdetails(String name, String gender, String dd, String mm, String yyyy) throws Throwable {
	    driver.findElement(By.name("name")).sendKeys(name);
	    driver.findElement(By.name("rad1")).sendKeys(gender);
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(dd);
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(mm);
	    driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(yyyy);
	    Thread.sleep(10000);
	    
	 }

	 @Then("^close the browser$")
	 public void close_the_browser() throws Throwable {
	   driver.quit();
	 }
}
