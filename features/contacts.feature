# Sikeres login teszt valós felhasználóval

    Scenario:
        Given I log in with username "user1" and password "pass1"
        Then I should see the dashboard

# Sikertelen login hibás jelszóval

    Scenario:
        Given The user logs in with wrong password
        Then The user sees an error message
