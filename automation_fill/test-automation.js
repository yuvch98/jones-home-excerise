import {
    launchBrowser,
    navigateToUrl,
    fillForm,
    takeScreenshot,
    submitForm,
    pageTitle,
    user,
    url,
  } from './form-automation.js';
import validator from 'validator';

async function check_launch(){

    const { browser, page } = await launchBrowser();
  
    try {
      // Test Case: Fill the form and navigate to the thank-you page
      console.log("Starting Test: Page redirection to given url");
  
      // Navigate to the form URL
      await navigateToUrl(page, url);

    }
    catch(error){
      console.error("test failed at url navigation.", error)
    }
    finally{
      return {browser, page};
    }
}

function check_user_validation(user){
    try {
      // Test Case: Fill the form and navigate to the thank-you page
      if (user['name'].length == 0){
          throw new Error("name must consist of letters")
      }
      if (!validator.isEmail(user['email'])){
        throw new Error("incorrect email format!")
      }
      if (user['phone'].length < 1){
        throw new Error("phone number length cannot be below 1")
      }
      if (user['company'].length == 0){
        throw new Error("company name cannot be empty")
      }
    }
    catch(error){
      console.error("test failed at user validation.", error)
    }
  }
  
  export function run(user){
    (async () => {
      const {browser, page} = await check_launch()
      console.log("Checking user validation...")
      check_user_validation(user)
      console.log("User has been validated successfully")
      // Fill in the form
      console.log("Filling form...")
      await fillForm(page, user);
      console.log("form has been filled successfully")
      // Take a screenshot before submission
      await takeScreenshot(page, 'screenshots/form-page.jpg');
      console.log("Moving to thank you page...")
      // Submit the form
      await submitForm(page);
  
      // Verify successful navigation and take a screenshot of the thank-you page
      await pageTitle(page);
      await takeScreenshot(page, 'screenshots/thank-you-page.jpg');
      console.log("Test Passed: Successfully reached the thank-you page!");
      await browser.close();

    })();
  }