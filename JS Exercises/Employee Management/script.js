// // employee class
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
//     static displayEmployee(){
//         const storedEmployees = [{
//             number: '2019500874',
//             name: 'Francis Beam',
//             age: '27',
//             gender: 'Male',
//             level: 'Junior Web dev',
//             company: 'Metacortex'
//         },{
//             number: '2019300644',
//             name: 'Cassandra',
//             age: '26',
//             gender: 'Female',
//             level: 'Senior Web dev',
//             company: 'Metacortex'
//         }
//     ];

//         const employees = storedEmployees;
//         employees.forEach((employee) => DISPLAY.addEmployeeToList(employee));
        
//     }

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
// }

// document.addEventListener('DOMContentLoaded', DISPLAY.displayEmployee)


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
// })





// this is straight to the point
//employee class
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

// // // core functions handles in display

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
// })






//create Employee class
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

//handles to the display and output
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
        <td>${employee.company}</td>`

        list.appendChild(row);
    }
}

//event add
document.querySelector('#employee-form').addEventListener('submit',(e)=>{
    e.preventDefault();

    const number = document.querySelector('#number').value;
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('#gender').value;
    const level = document.querySelector('#level').value;
    const company = document.querySelector('#company').value;

    const output = new Employee (number,name,age,gender,level,company);

    DISPLAY.displayEmployeeToList(output);
})