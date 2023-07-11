// Dom Manipulation

//GetElementById()

const title = document.getElementById('main-heading');
console.log(title);

//GetElementByClassName

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

//GetElementByTagName

const listItem2 = document.getElementsByTagName('li');
console.log(listItem2);

//querySelector() - select the first item that matchs the selector given

const container = document.querySelector('div');
console.log(container);

//querySelectorAll() - select the first item that matchs the selector given

const containers = document.querySelectorAll('div');
console.log(containers);