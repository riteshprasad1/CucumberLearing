Feature: Guru99 login page feature

#Scenario: Guru99 Login page Test Scenario

#Without Examples keyword
#Given user is already on login page
#When title of login page is Guru99
#Then user enter "mngr260414" and "bEpYnum"
#Then user click on login button
#Then user is on home page

#With example keyword
Scenario Outline: Guru99 Login page Test Scenario

Given user is already on login page
When title of login page is Guru99
Then user enter "<username>" and "<password>"
Then user click on login button
Then user is on home page

#if using examples keyword we use scenariooutline and not scenario
Examples: 
	|username 	|password|
	|mngr260414	|bEpYnum|	
	|mngr26041411	|bEpYnum11|	