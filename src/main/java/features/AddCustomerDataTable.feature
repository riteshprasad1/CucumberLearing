Feature: Guru99 Add customer feature with DataTable

Scenario: Guru99 Add new customer scenario with DataTable

Given user is already on login page
When title of login page is Guru99
Then user enter username and password
|mngr260414  |bEpYnum|
Then user click on login button
Then user is on home page
Then user clicks on new customer link
Then user enters name and gender and dd and mm and yyyy
|Ritesh|m|26|02|1991|
Then close the browser