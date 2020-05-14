$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RITESH/seleniumframework/CucumberFramworkBDD/src/main/java/features/Tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Tagging functionality",
  "description": "",
  "id": "verify-tagging-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Verify remove customer",
  "description": "",
  "id": "verify-tagging-functionality;verify-remove-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "when user is going to click remove customer",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.when_user_is_going_to_click_remove_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Verify new customer add phone",
  "description": "",
  "id": "verify-tagging-functionality;verify-new-customer-add-phone",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "when user is going to click new customer add phone",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.when_user_is_going_to_click_new_customer_add_phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Verify click logout",
  "description": "",
  "id": "verify-tagging-functionality;verify-click-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "when user is going to click logout",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.when_user_is_going_to_click_logout()"
});
formatter.result({
  "status": "skipped"
});
});