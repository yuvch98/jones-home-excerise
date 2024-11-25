import {
    launchBrowser,
    navigateToUrl,
    fillForm,
    takeScreenshot,
    submitForm,
    pageTitle
  } from './formAutomation.js';
import {
    user,
    url,
    selectors
} from '../utils/const.js'

import validator from 'validator';

async function check_launch(){
    console.log("Starting Test: Page redirection to given url");
  
    const { browser, page } = await launchBrowser();
  
    try {
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

function check_user_validation(){
    try {
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
  
  export async function run() {
    try {
      // Launch browser and navigate to URL
      const { browser, page } = await check_launch();
      
      console.log("Checking user validation...");
      check_user_validation(user); // Validate the user object
      console.log("User has been validated successfully");
  
      // Fill the form and take a screenshot
      console.log("Filling form...");
      await fillForm(page, user, selectors);
      console.log("Form has been filled successfully");
      await takeScreenshot(page, 'screenshots/form-page.jpg');
  
      // Submit the form
      console.log("Moving to thank you page...");
      await submitForm(page, selectors);
  
      // Verify navigation and take a final screenshot
      await pageTitle(page);
      await takeScreenshot(page, 'screenshots/thank-you-page.jpg');
      console.log("Successfully reached the thank-you page!");
  
      // Close the browser
      await browser.close();
    } catch (error) {
      console.error("An error occurred during the run:", error);
    }
  }
  