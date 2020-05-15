package hooksStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	protected static WebDriver driver;
	
	protected  WebDriver getDriver() 
	{	
		if (driver == null) {
			
		
		WebDriverManager.chromedriver().setup();
		ChromeOptions options = new  ChromeOptions(); 
		  options.addArguments("--ignore-certificate-errors"); 
		  driver  = new ChromeDriver(options);
		driver.get("https://demo.guru99.com/V4/index.php");
		driver.findElement(By.name("uid")).sendKeys("mngr260414");
	    driver.findElement(By.name("password")).sendKeys("bEpYnum");
	    driver.findElement(By.name("btnLogin")).click();
		}
		return driver;
	}
	

}
