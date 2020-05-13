Feature: Guru99 Add customer feature

Scenario Outline: Guru99 Add new customer scenario

Given user is already on login page
When title of login page is Guru99
Then user enter "<username>" and "<password>"
Then user click on login button
Then user is on home page
Then user clicks on new customer link
Then user enters "<name>" and "<gender>" and "<dd>" and "<mm>" and "<yyyy>"
Then close the browser
 
Examples:

	|username|password|name|gender|dd|mm|yyyy|
	|mngr260414|bEpYnum|Ritesh|m|26|02|1991|