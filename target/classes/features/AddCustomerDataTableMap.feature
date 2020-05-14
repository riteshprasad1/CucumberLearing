Feature: Guru99 Add customer feature with DataTable and Maps

Scenario: Guru99 Add new customer scenario with DataTable and maps

Given user is already on login page
When title of login page is Guru99
Then user enter username and password
|username|password|
|mngr260414  |bEpYnum|
Then user click on login button
Then user is on home page
Then user clicks on new customer link
Then user enters name and gender and dd and mm and yyyy
|name|gender|dd|mm|yyyy|
|Ritesh|m|26|02|1991|
|Prasad|m|27|03|1992|
Then close the browser