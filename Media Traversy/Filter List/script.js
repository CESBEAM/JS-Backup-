
// //Get input element
// let filterInput = document.getElementById('filterInput').addEventListener('keyup', filterNames);


// function filterNames(){
//    //get value of input
//    let filterValue = document.getElementById('filterInput').value.toUpperCase();
   
//    //get names ul
//    let ul = document.getElementById('names');
   
//    //get li from ul
//    let li = ul.querySelectorAll('li.collection-item');

//    //loop through collection-item li
//    for(let i = 0; i<li.length; i++){
//     let a = li[i].getElementsByTagName('a')[0];

//     // if matched
//     if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
//         li[i].style.display ='';
//     }else{
//         li[i].style.display ='none';
//     }
//    }
// }


//get the input
var filterInput = document.querySelector('#filterInput').addEventListener('keyup',filterNames);

//function of filter search
function filterNames(){
    var filterValue = document.querySelector('#filterInput').value.toUpperCase();

    var ul = document.querySelector('#names')
    var li = ul.querySelectorAll('li.collection-item');
    

    for(var x=0; x<li.length; x++){
        var a = li[x].getElementsByTagName('a')[0];
    
    //if matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
        li[x].style.display = '';
    }else{
        li[x].style.display = 'none';
    }
  }
}