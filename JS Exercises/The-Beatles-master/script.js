//change hover color
var fontColor = document.querySelectorAll('li a');


for (x=0; x<fontColor.length; x++){
    fontColor[x].style.color="orange";
    fontColor[x].style.fontWeight="bold";
}

//remove logo
var  removeLogo = document.querySelector('.logo img');
removeLogo.style.display = "none";

//navi section padding
var navPadding = document.querySelector('header');
navPadding.style.padding = "30px";

//navi ul padding
var ulPadding = document.querySelector('ul');
ulPadding.style.paddingRight="5em";

//addLogo
var addLogo = document.createElement('div')
addLogo.className = "classLogo";
addLogo.id = "idLogo";

var textLogo = document.createTextNode('CONRED');
addLogo.appendChild(textLogo);

//add logo target Loc
var logo = document.querySelector('header .logo');
var h1 = document.querySelector('header h1');

//insert
logo.insertBefore(addLogo, h1);

//logoStyle
var logoStyle = document.querySelector('.logo')
logoStyle.style.fontFamily = "arial";
logoStyle.style.fontSize = "25px"
logoStyle.style.color = "red";
logoStyle.style.paddingLeft = "5em";


//buttonSignup

var buyBtn = document.querySelector('.btn-sign');
buyBtn.textContent = "Buy Albums";
