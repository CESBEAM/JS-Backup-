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


// var main = document.getElementById('button').addEventListener ('click', buttonClick);


// function buttonClick(e){
    //console.log('Button Clicked');
    // document.getElementById('header-title').textContent = 'DOM!!';
    // document.querySelector('#main').style.backgroundColor = 'red';
    // console.log(ee);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.className+'</h3>'

    // console.log(e.type);

    // console.log(e.clientX);

    // var output = document.querySelector('#output');

    // output.innerHTML = '<h3>'+e.clientX+'</h3>'

    // console.log(e.clientX);
    // console.log(e.clientY);
  
    // console.log(e.offsetX)
    // console.log(e.offsetY)

//     var output = document.querySelector('#output');
//     var xAxis = e.offsetX;

//     if(e.xAxis = true){
//     output.innerHTML = '<h3> X axis:'+ xAxis+ '</h3>'
//     }else{
//     output.innerHTML = '<h3> Y axis: </h3>'
//     }
// }

// console.log(e.ctrlKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

// box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

var select = document.querySelector('select');

select.addEventListener('change',runEvent);

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('input',runEvent);
// itemInput.addEventListener('paste',runEvent);

itemInput.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent)

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    console.log(e.target.value);
    // var output = document.getElementById('output');
    // output.innerHTML = "<h3>"+e.target.value+"</h3>";
    

    // output.innerHTML = '<h3> Mouse X: '+e.offsetX+'</h3><h3>Mouse Y: '+e.offsetY+'</h3>';

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

    var newList = document.createElement('li')
    newList.className='li'
    newList.id='listid'
}