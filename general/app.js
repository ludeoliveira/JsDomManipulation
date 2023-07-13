// // 1. Dom Manipulation

// //GetElementById()

// const title = document.getElementById('main-heading');
// console.log(title);

// //GetElementByClassName

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// //GetElementByTagName

// const listItem2 = document.getElementsByTagName('li');
// console.log(listItem2);

// //querySelector() - select the first item that matchs the selector given

// const container = document.querySelector('div');
// console.log(container);

// //querySelectorAll() - select the first item that matchs the selector given

// const containers = document.querySelectorAll('div');
// console.log(containers);


//2. manipulate style of elements

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '20px';
// }

//3.creating elements

//const ul = document.querySelector('ul');
//const li = document.createElement('li');

//insert li element inside of existent ul element

//ul.append(li);

// Modifying the text

li.innerText = 'X-men';

// Modifying Attributes and classes

li.setAttribute('id', 'main-heading'); // gets atribute id with the name main-heading
li.removeAttribute('id');

li.classList.add('list-items');

// Remove Elements

li.remove();

// 4. Traverse the Dom
//Parent node traversal

let ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentElement);
