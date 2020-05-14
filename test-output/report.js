$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RITESH/seleniumframework/CucumberFramworkBDD/src/main/java/features/AddCustomerDataTableMap.feature");
formatter.feature({
  "line": 1,
  "name": "Guru99 Add customer feature with DataTable and Maps",
  "description": "",
  "id": "guru99-add-customer-feature-with-datatable-and-maps",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Guru99 Add new customer scenario with DataTable and maps",
  "description": "",
  "id": "guru99-add-customer-feature-with-datatable-and-maps;guru99-add-new-customer-scenario-with-datatable-and-maps",
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "mngr260414",
        "bEpYnum"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new customer link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters name and gender and dd and mm and yyyy",
  "rows": [
    {
      "cells": [
        "name",
        "gender",
        "dd",
        "mm",
        "yyyy"
      ],
      "line": 14
    },
    {
      "cells": [
        "Ritesh",
        "m",
        "26",
        "02",
        "1991"
      ],
      "line": 15
    },
    {
      "cells": [
        "Prasad",
        "m",
        "27",
        "03",
        "1992"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8652094783,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.title_of_login_page_is_Guru99()"
});
formatter.result({
  "duration": 36767963,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 770651911,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.user_click_on_login_button()"
});
formatter.result({
  "duration": 2197842954,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.user_is_on_home_page()"
});
formatter.result({
  "duration": 45265806,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.user_clicks_on_new_customer_link()"
});
formatter.result({
  "duration": 832782975,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.user_enters_newcustomerdetails(DataTable)"
});
formatter.result({
  "duration": 25475816729,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerDataTableMapDefiniton.close_the_browser()"
});
formatter.result({
  "duration": 696593422,
  "status": "passed"
});
});