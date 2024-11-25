# Form Automation

This project is for automating the process of filling out and submitting a form on a web page. The project uses Puppeteer for browser automation, and includes validation checks for the form fields. The tests are designed to ensure that the form behaves correctly under various conditions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test Cases](#test-cases)
- [Technologies](#technologies)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yuvch98/jones-home-excerise.git
    cd jones-home-excerise
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

1. **Run **

    To run the automation, execute the following command:

    ```bash
    node jones-home-exercise/main.js
    ```

    This will start the browser, navigate to the form URL, fill out the form with user data, validate the fields, take screenshots before and after form submission, and log upon successful automation.

2. **Test Customization**

    The `user` object can be modified to contain different values for the form fields (e.g., name, email, phone, company) to test different scenarios.

    Example:
    
    ```javascript
    const user = {
      name: 'john doe',
      email: 'john_doe@gmail.com',
      phone: '555-555-555',
      company: 'lost & found'
    };
    ```

## Test Cases

The automation includes several test cases for validating form fields:

- **Form URL Navigation**: Ensure the form URL loads correctly.
- **User Validation**: Validate that the user fields (name, email, phone, company) are not empty 
and follow proper formats.
    - Name must contain letters.
    - Email must follow a valid email format.
    - Phone number length must be valid.
    - Company name must not be empty.
- **Form Submission**: Fill the form, submit it, and ensure redirection to the thank-you page.
- **Screenshots**: Capture screenshots before and after form submission to visually verify the process.

## Technologies

This project uses the following technologies:

- **Puppeteer**: For browser automation to interact with the form.
- **Validator**: For validating the form fields (e.g., email format).
- **Node.js**: JavaScript runtime for running the tests.
- **npm**: For managing project dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
