# Freely QA Assessment

## Manual Testing Scenarios
1. Login with valid credentials
2. Invalid login shows error
3. Forgot password functionality
4. New user registration
5. Mandatory field validation
6. Profile update
7. Navigation menu links work correctly
8. Search functionality
9. Responsive layout check
10. Logout clears session

## Automated Scenarios
- Login with valid credentials
- Invalid login shows error
- Navigation menu links work correctly

## Setup & Run
```bash
npm install
npx cypress open
Structure
/cypress/e2e → Cypress test files

/cypress/fixtures → Test data

/cypress/support → Custom commands

Author: Prabhagar T

yaml
Copy
Edit

---

## **9. Steps to Run & Submit**
1. Create a new folder → copy these files into it.  
2. Run:
   ```bash
   npm init -y
   npm install cypress --save-dev
Replace valid credentials in testData.json.

Test locally:

bash
Copy
Edit
npx cypress open
Push to GitHub:

bash
Copy
Edit
git init
git add .
git commit -m "Freely QA assessment"
git branch -M main
git remote add origin https://github.com/<your-username>/freely-assessment.git
git push -u origin main