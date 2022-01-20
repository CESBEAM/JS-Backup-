//traversing DOM

//parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor="#f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes not recommend
// var itemList = document.querySelector('#items');
// console.log(itemList.childNodes);

// var itemList = document.querySelector('#items');
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.color = "red"
// itemList.children[1].textContent = 'DOM!!!'

//first child
// var itemList = document.querySelector('#items');
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color = "red"

//last child
// var itemList = document.querySelector('#items');
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = "red"
// itemList.lastElementChild.textContent="doom!"

// var itemList = document.querySelector('#items');
// console.log(itemList.previousElementSibling);


//create Element
// let's create div
// var newDiv = document.createElement('div');

// //add class name
// newDiv.className = 'hi';
// //add id name
// newDiv.id = 'hello';

// // //add attribute
// newDiv.setAttribute('title', 'hellow div');

// // //create text node
// var newDivText = document.createTextNode ('hello world');

// // //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// container.insertBefore(newDiv, h1);


// var newDiv = document.createElement('div');
// newDiv.className = 'hi';
// newDiv.id = 'hello';