Feature: Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user logs in with the following credentials:
      | email | password       |
      | testuser | correctpass123 |
    Then the user should be logged in successfully

  Scenario: Unsuccessful login with invalid password
    Given the user is on the login page
    When the user logs in with the following credentials:
      | email | password   |
      | testuser | wrongpass  |
    Then The user should see an error message for invalid credentials
