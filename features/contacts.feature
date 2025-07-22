Feature: Contact Management

  Scenario: Create a new contact
    Given The user is logged in
    When The user creates a new contact with the following data:
      | name      | email             |
      | John Doe  | john@example.com  |
    Then the new contact should appear in the list

  Scenario: Edit an existing contact
    Given a contact named "John Doe" exists
    When The user edits the contact with the following new data:
      | name        | email              |
      | Doe John    | doe@example.com    |
    Then the updated contact should appear in the list

  Scenario: Delete a contact
    Given a contact named "Doe John" exists
    When The user deletes the contact
    Then the contact should no longer appear in the list
