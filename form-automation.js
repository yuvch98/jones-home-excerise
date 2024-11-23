// importing needed libraries.
import puppeteer from 'puppeteer';


(async () => {
  // Launch the browser
  const browser = await puppeteer.launch(); 
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto('https://testsite.getjones.com/ExampleForm/');

  // Set the screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Fill in the form fields. # stands for ID css locator.
  await page.type('#name', 'Yuval Chabra');
  await page.type('#email', 'yuvalchabra100@gmail.com');
  await page.type('#phone', '+972-52-330-0695');
  await page.type('#company', 'Future Jones Employee');

  // Change the Number of Employees dropdown
  await page.select('#employees', '51-500');

  // Take a screenshot before submitting
  await page.screenshot({ path: 'form-page.jpg' });

  // Click the "Request a call back" button
  await page.click('button');

  // Wait for navigation to the thank-you page
  await page.waitForNavigation();

  // Log the page title and a success message
  console.log("current page title: "+ await page.title());
  console.log("We've reached the thank you page! Hooray!");

  // Take a screenshot of the thank-you page to make sure we've arrived to it.
  await page.screenshot({ path: 'thank-you-page.jpg' });

  // Close the browser
  await browser.close();
})();