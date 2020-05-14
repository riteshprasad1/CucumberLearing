$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RITESH/seleniumframework/CucumberFramworkBDD/src/main/java/features/AddCustomerDataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Guru99 Add customer feature with DataTable",
  "description": "",
  "id": "guru99-add-customer-feature-with-datatable",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Guru99 Add new customer scenario with DataTable",
  "description": "",
  "id": "guru99-add-customer-feature-with-datatable;guru99-add-new-customer-scenario-with-datatable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Guru99",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "mngr260414",
        "bEpYnum"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on new customer link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters name and gender and dd and mm and yyyy",
  "rows": [
    {
      "cells": [
        "Ritesh",
        "m",
        "26",
        "02",
        "1991"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.title_of_login_page_is_Guru99()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.user_clicks_on_new_customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.user_enters_newcustomerdetails(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddCustomerDataTableDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});