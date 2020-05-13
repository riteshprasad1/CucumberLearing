$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RITESH/seleniumframework/CucumberFramworkBDD/src/main/java/features/AddCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Guru99 Add customer feature",
  "description": "",
  "id": "guru99-add-customer-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Guru99 Add new customer scenario",
  "description": "",
  "id": "guru99-add-customer-feature;guru99-add-new-customer-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new customer link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cname\u003e\" and \"\u003cgender\u003e\" and \"\u003cdd\u003e\" and \"\u003cmm\u003e\" and \"\u003cyyyy\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "guru99-add-customer-feature;guru99-add-new-customer-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name",
        "gender",
        "dd",
        "mm",
        "yyyy"
      ],
      "line": 16,
      "id": "guru99-add-customer-feature;guru99-add-new-customer-scenario;;1"
    },
    {
      "cells": [
        "mngr260414",
        "bEpYnum",
        "Ritesh",
        "m",
        "26",
        "02",
        "1991"
      ],
      "line": 17,
      "id": "guru99-add-customer-feature;guru99-add-new-customer-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Guru99 Add new customer scenario",
  "description": "",
  "id": "guru99-add-customer-feature;guru99-add-new-customer-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enter \"mngr260414\" and \"bEpYnum\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new customer link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Ritesh\" and \"m\" and \"26\" and \"02\" and \"1991\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8996362665,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Guru99()"
});
formatter.result({
  "duration": 34035984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr260414",
      "offset": 12
    },
    {
      "val": "bEpYnum",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 745784629,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 3000957441,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 39227290,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_customer_link()"
});
formatter.result({
  "duration": 853678707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ritesh",
      "offset": 13
    },
    {
      "val": "m",
      "offset": 26
    },
    {
      "val": "26",
      "offset": 34
    },
    {
      "val": "02",
      "offset": 43
    },
    {
      "val": "1991",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_newcustomerdetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 11078430635,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 724699543,
  "status": "passed"
});
});