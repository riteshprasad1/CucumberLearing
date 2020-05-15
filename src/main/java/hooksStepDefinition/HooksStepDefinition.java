package hooksStepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HooksStepDefinition extends BaseClass {
	
	WebDriver driver = getDriver();
	
	@Then("^when user is on Guru Home page$")
	public void when_user_is_on_Guru_Home_page() throws Throwable {
		 String homepage = driver.getTitle();
		 Assert.assertEquals("Guru99 Bank Manager HomePage", homepage);
	}

	@Then("^user clicks on newcustomer link$")
	public void user_clicks_on_newcustomer_link() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(),'New Customer')]")).click();
	}

}
