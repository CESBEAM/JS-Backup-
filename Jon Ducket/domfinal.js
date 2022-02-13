var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem)

//Delete event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filterItems)

//Add item
function addItem(e){
    e.preventDefault();

   // input input value;
   var newItem = document.getElementById('item').value;

   //create new li element
   var li = document.createElement('li');
   li.className = 'list-group-item';

   //Add text node with input value
   li.appendChild(document.createTextNode(newItem));

   //create delete button element
   var deleteBtn = document.createElement('button');
   deleteBtn.className = "btn btn-danger btn-sm float-right delete";

   deleteBtn.appendChild(document.createTextNode('x'));

   //append button to li
   li.appendChild(deleteBtn);

   //append li to list
   itemList.appendChild(li);
}

// Remove items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li); 
        }
    }
}

function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display = "block";
        }else{
            item.style.display = 'none';
        }
    });
}

