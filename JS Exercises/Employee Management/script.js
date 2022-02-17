// // //create Employee class
// // class Employee{
// //     constructor (number, name, age, gender,level, company){
// //         this.number = number;
// //         this.name = name;
// //         this.age = age;
// //         this.gender = gender;
// //         this.level = level;
// //         this.company = company;
// //     }
// // }

// // // core functions handles in display
// // class DISPLAY{
// //     static addEmployeeToList(employee){
// //         const list = document.querySelector('#employee-list');
// //         const row = document.createElement('tr');

// //         row.innerHTML = `
// //         <td>${employee.number}</td>
// //         <td>${employee.name}</td>
// //         <td>${employee.age}</td>
// //         <td>${employee.gender}</td>
// //         <td>${employee.level}</td>
// //         <td>${employee.company}</td>
// //         <td><button class = "btn btn-danger delete">X</button></td>`

// //         list.appendChild(row);
// //     }
// //     //clear fields();
// //     static clearFields(){
// //        document.querySelector('#number').value = '';
// //        document.querySelector('#name').value='';
// //        document.querySelector('#age').value = '';
// //        document.querySelector('#gender').value='';
// //        document.querySelector('#level').value = '';
// //        document.querySelector('#company').value='';
// //     }
// //     // event remove book
// //    static deleteEmployee(del){
// //        if(del.classList.contains('delete')){
// //            del.parentElement.parentElement.remove();
// //        }
// //    }
// // }

// // // event add employee and initialization
// // document.querySelector('#employee-form').addEventListener('submit',(e)=>{
// // e.preventDefault();
// //     const number = document.querySelector('#number').value;
// //     const name = document.querySelector('#name').value;
// //     const age = document.querySelector('#age').value;
// //     const gender = document.querySelector('#gender').value;
// //     const level = document.querySelector('#level').value;
// //     const company = document.querySelector('#company').value;

// //     const employee = new Employee(number,name,age,gender,level,company)

  
// //     DISPLAY.addEmployeeToList(employee);
// //     DISPLAY.clearFields();

// //     document.querySelector('#employee-list').addEventListener('click',e=>{
// //         DISPLAY.deleteEmployee(e.target);
// //     })
// // })


// //employee class
// class Employee{
//     constructor(number,name,age,gender,level,company){
//         this.number = number;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.level = level;
//         this.company = company;
//     }
// }

// //handles with output and display
// class DISPLAY{
//     static displayEmployeeToList(employee){
//         const list = document.querySelector('#employee-list');
//         const row = document.createElement('tr');

//         row.innerHTML = 
//         `<td>${employee.number}</td>
//         <td>${employee.name}</td>
//         <td>${employee.age}</td>
//         <td>${employee.gender}</td>
//         <td>${employee.level}</td>
//         <td>${employee.company}</td>
//         <td><button class = "btn btn-danger delete">X</button></td>`

//         list.appendChild(row);
//     }

//     //clear Field after submitting form
//     static clearField(){
//         document.querySelector('#number').value = '';
//         document.querySelector('#name').value = '';
//         document.querySelector('#age').value = '';
//         document.querySelector('#gender').value = '';
//         document.querySelector('#level').value = '';
//         document.querySelector('#company').value = '';
//     }

//     //delete button
//     static deleteButton(del){
//         if(del.classList.contains('delete')){
//             del.parentElement.parentElement.remove();
//         }
//     }

//     //show alert Message
//     static showAlert(message, className){
//         const div = document.createElement('div');
//         div.className = `alert alert-${className}`;
//         div.appendChild(document.createTextNode(message));

//         const container = document.querySelector('.container');
//         const form = document.querySelector('#employee-form');
//         container.insertBefore(div, form);
//     }
// }


// //event add and initialization
// document.querySelector('#employee-form').addEventListener('submit',e=>{
//     e.preventDefault();

//     const number = document.querySelector('#number').value;
//     const name = document.querySelector('#name').value;
//     const age = document.querySelector('#age').value;
//     const gender = document.querySelector('#gender').value;
//     const level = document.querySelector('#level').value;
//     const company = document.querySelector('#company').value;

//     //form validation
//     if(number ==='' || name ==='' || age ==='' || gender ==='' || level ==='' || company ===''){
//         DISPLAY.showAlert('Fill all fields', 'danger');
//     }else{

//     const employee = new Employee (number,name,age,gender,level,company)
//     DISPLAY.displayEmployeeToList(employee);
//     DISPLAY.clearField();

//     //show success Message
//     DISPLAY.showAlert('Employee is Added', 'success');

//     //delete Event
//     document.querySelector('#employee-list').addEventListener('click',e=>{
//         DISPLAY.deleteButton(e.target);

//     //show remove message
//     DISPLAY.showAlert('Employee is removed from the list', 'danger');
//     })
// }
// })


// //create Employee class
// class Employee{
//     constructor (number, name, age, gender,level, company){
//         this.number = number;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.level = level;
//         this.company = company;
//     }
// }

// // core functions handles in display
// class DISPLAY{
//     static addEmployeeToList(employee){
//         const list = document.querySelector('#employee-list');
//         const row = document.createElement('tr');

//         row.innerHTML = `
//         <td>${employee.number}</td>
//         <td>${employee.name}</td>
//         <td>${employee.age}</td>
//         <td>${employee.gender}</td>
//         <td>${employee.level}</td>
//         <td>${employee.company}</td>
//         <td><button class = "btn btn-danger delete">X</button></td>`

//         list.appendChild(row);
//     }
//     //clear fields();
//     static clearFields(){
//        document.querySelector('#number').value = '';
//        document.querySelector('#name').value='';
//        document.querySelector('#age').value = '';
//        document.querySelector('#gender').value='';
//        document.querySelector('#level').value = '';
//        document.querySelector('#company').value='';
//     }
//     // event remove book
//    static deleteEmployee(del){
//        if(del.classList.contains('delete')){
//            del.parentElement.parentElement.remove();
//        }
//    }
// }

// // event add employee and initialization
// document.querySelector('#employee-form').addEventListener('submit',(e)=>{
// e.preventDefault();
//     const number = document.querySelector('#number').value;
//     const name = document.querySelector('#name').value;
//     const age = document.querySelector('#age').value;
//     const gender = document.querySelector('#gender').value;
//     const level = document.querySelector('#level').value;
//     const company = document.querySelector('#company').value;

//     const employee = new Employee(number,name,age,gender,level,company)

  
//     DISPLAY.addEmployeeToList(employee);
//     DISPLAY.clearFields();

//     document.querySelector('#employee-list').addEventListener('click',e=>{
//         DISPLAY.deleteEmployee(e.target);
//     })
// })


//employee class
class Employee{
    constructor(number,name,age,gender,level,company){
        this.number = number;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;
        this.company = company;
    }
}

//handles with output and display
class DISPLAY{
    static displayEmployeeToList(employee){
        const list = document.querySelector('#employee-list');
        const row = document.createElement('tr');

        row.innerHTML = 
        `<td>${employee.number}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.gender}</td>
        <td>${employee.level}</td>
        <td>${employee.company}</td>
        <td><button class = "btn btn-danger delete">X</button></td>`

        list.appendChild(row);
    }

    //clear Field after submitting form
    static clearField(){
        document.querySelector('#number').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#age').value = '';
        document.querySelector('#gender').value = '';
        document.querySelector('#level').value = '';
        document.querySelector('#company').value = '';
    }

    //delete button
    static deleteButton(del){
        if(del.classList.contains('delete')){
            del.parentElement.parentElement.remove();
        }
    }

    //show alert Message
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#employee-form');
        container.insertBefore(div,form);
    }
}


//event add and initialization
document.querySelector('#employee-form').addEventListener('submit',e=>{
    e.preventDefault();

    const number = document.querySelector('#number').value;
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('#gender').value;
    const level = document.querySelector('#level').value;
    const company = document.querySelector('#company').value;

    //form validation
    if(number ==='' || name ==='' || age ==='' || gender ==='' || level ==='' || company ===''){
        DISPLAY.showAlert('Fill all fields', 'danger');
    }else{

    const employee = new Employee (number,name,age,gender,level,company)
    DISPLAY.displayEmployeeToList(employee);
    DISPLAY.clearField();

    //show success Message
    DISPLAY.showAlert('Employee is Added', 'success');

    //delete Event
    document.querySelector('#employee-list').addEventListener('click',e=>{
        DISPLAY.deleteButton(e.target);

    //show remove message
    DISPLAY.showAlert('Employee is removed from the list', 'danger');
    })
}
})