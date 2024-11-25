// to be changed by user definition.
export const user = {
    'name' : 'Yuval Chabra',
    'email' : 'yuvalchabra100@gmail.com',
    'phone' : '+972-52-330-0695',
    'company' : 'Future jones employee',
    'amount_of_workers': '51-500' 
}

// url for scraping
export const url = "https://testsite.getjones.com/ExampleForm/"


//needed selectors to use for finding the place to fill.
export const selectors = {
    name: '#name',
    email: '#email',
    phone: '#phone',
    company: '#company',
    employees: '#employees',
    button: 'button'
}