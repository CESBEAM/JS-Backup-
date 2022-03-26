


document.getElementById('getText').addEventListener('click', getText);

document.getElementById('getUsers').addEventListener('click', getUsers);

document.getElementById('getApi').addEventListener('click', getApi);

document.getElementById('addPost').addEventListener('submit', addPost);

//oldway
// function getText(){
//     fetch('sample.txt')
//     .then(function(res){
//         return (res.text())
//     })
//     .then(function(data){
//         document.getElementById('output').innerHTML = data
//     })
// }


//es6
function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data
    })
    .catch((err) => console.log(err));
}

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let result = '<h2>Users</h2>';
      data.forEach(function(user){
        result += `
          <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
          </ul>
          `;
      })

      document.getElementById('outputUsers').innerHTML = result;
    })
    .catch((err) => console.log(err))
}

function getApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let result  = '';

        data.forEach(function(post){
         result +=` 
                <div>
                <h2>Title: ${post.title}</h2>
                <p>Body: ${post.body}</p>
                </div>
            `;
        })
        document.getElementById('outputApi').innerHTML = result;
    })
    .catch((err) => console.log(err));
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    
        }) 

        .then((res) => res.json())
        .then((data)=> { 
            document.getElementById('fetchApi').innerHTML = 
            `<h1>${data.title}</h1>
                <p>${data.body}</p>
            `;
        })

}