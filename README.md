# Form Validation Project

## Overview

This project demonstrates HTML form validation using pure JavaScript. It includes two forms:
- **SignIn Form**: Contains fields for username and password.
- **SignUp Form**: Contains eight fields (username, email, password, confirm password, age, phone, address, gender) to showcase validations.

## Features

- **HTML & CSS**: Clean, modern, and responsive design with attractive colors and gradients.
- **JavaScript Validation**: Front-end validation using pure JavaScript and regex, ensuring:
  - Fields are not empty.
  - Email is in a valid format.
  - Password meets strength requirements (at least 6 characters, including a special character and a number).
  - Confirm Password matches.
  - Age is a valid number between 18 and 100.
  - Phone number is within the accepted digit range.
  - Gender is selected.

## File Structure

- `index.html` – Contains the structure for the SignIn and SignUp forms.
- `styles.css` – Provides the styling and color scheme for the forms.
- `script.js` – Implements the JavaScript validations.
- `README.md` – Project documentation including screenshots and description.

## Commit History

1. **HTML Commit**: Added the basic HTML structure for the SignIn and SignUp forms.
2. **CSS Commit**: Integrated attractive colors and styles to enhance the design.
3. **JavaScript Commit**: Implemented front-end validation for all form fields using JavaScript and regex.

## Screenshots
![image](https://github.com/user-attachments/assets/5df52b9c-ec3f-4cbe-9581-7203802c44ca)
![image](https://github.com/user-attachments/assets/3ac9e2c5-5183-4f11-9d50-d68ef6037ca6)
![image](https://github.com/user-attachments/assets/2e390456-3565-47f5-9c07-223831f30b62)
![image](https://github.com/user-attachments/assets/c55737c8-acb2-4173-a9d4-80d7abfbb24f)
![image](https://github.com/user-attachments/assets/1351bac1-74c3-4c3b-9256-46d497259050)


## Field Descriptions

- **Username**: Cannot be empty.
- **Email**: Must follow standard email format (e.g., user@example.com).
- **Password**: Minimum 6 characters, must include at least one special character and one number.
- **Confirm Password**: Must match the Password field.
- **Age**: A valid number between 18 and 100.
- **Phone**: Should be digits only (10-15 digits).
- **Address**: Cannot be empty.
- **Gender**: Must select from the provided options.

## How to Run

1. Clone the repository.
2. Open the `index.html` file in your browser.
3. Test the form submissions to see validations in action.


