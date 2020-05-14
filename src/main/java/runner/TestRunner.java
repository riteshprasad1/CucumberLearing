package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "C:\\Users\\RITESH\\seleniumframework\\CucumberFramworkBDD\\src\\main\\java\\features\\AddCustomerDataTable.feature",
		//glue= {"stepDefinitionNewCustomer"},
		glue= {"helper","stepDefinitionNewCustomer"},
		format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		dryRun = true,
		monochrome = true
		)


public class TestRunner {

}
