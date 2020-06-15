Feature: LeafTaps Automation

Scenario Outline: Login Positive Flow

Given Launch the application
And Maximize the browser
And Set the timeouts
And Enter the username as "<username>"
And Enter the password as "<password>"
When Clicking on the login button
Then Verify login successful

Examples:
| username | password |
| demosalesmanager  | crmsfa  |