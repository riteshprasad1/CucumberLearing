package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "C:\\Users\\RITESH\\seleniumframework\\CucumberFramworkBDD\\src\\main\\java\\features\\TaggedHooks.feature",
		//glue= {"stepDefinitionNewCustomer"},
		glue= {"helper","hooksStepDefinition"},
		format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		dryRun = false,
		monochrome = true
		//tags = {"~@Regression", "~@Smoke"}	//{"@Regression", "@Smoke"}-- it is AND condition where both scenario with Smoke and regression will be executed
											//{"@Regression , @Smoke"}--it is OR condition where either smoke or regression will be executed
		)									//{"~@Regression", "@Smoke"}--special character ~ is used to ignore test


public class TestRunner {

}
