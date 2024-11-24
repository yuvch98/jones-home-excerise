import puppeteer from 'puppeteer';

export const user = {
  'name' : 'Yuval Chabra',
  'email' : 'yuvalchabra100@gmail.com',
  'phone' : '+972-52-330-0695',
  'company' : 'Future jones employee',
  'amount_of_workers': '51-500' 
}

export const url = "https://testsite.getjones.com/ExampleForm/"

// Function to launch the browser and open a new page
export async function launchBrowser() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return { browser, page };
}

// Function to log the current page title
export async function pageTitle(page) {
  const title = await page.title();
  console.log("Current page title: " + title);
}

// Function to navigate to a specified URL
export async function navigateToUrl(page, url) {
  await page.goto(url);
  await page.setViewport({ width: 1080, height: 1024 });
  await pageTitle(page)
}

// Function to fill out the form
export async function fillForm(page, user) {
  await page.type('#name', user['name']);
  await page.type('#email', user['email']);
  await page.type('#phone', user['phone']);
  await page.type('#company', user['company']);
  await page.select('#employees', user['amount_of_workers']);
}

// Function to take a screenshot
export async function takeScreenshot(page, fileName) {
  await page.screenshot({ path: fileName });
}

// Function to submit the form and wait for navigation
export async function submitForm(page) {
  await page.click('button');
  await page.waitForNavigation();
}

