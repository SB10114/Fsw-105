var employees = [];

function Employee(name, jobTitle, salary, status  = 'Contract'){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){ 
        console.log(name +', ' + jobTitle +', '+ salary +', '+ status);
    }
    employees.push(this)
}


var employee1 = new Employee('Evan Smith', 'Clerk', '$20,000 a year', 'Fulltime');
var employee2 = new Employee('Ben Scott', 'Case Worker', '$50,000 a year', 'Fulltime');
var employee3 = new Employee('Sandy Ball', 'Supervisor', '$80,000 a year');

console.log(employee1.printEmployeeForm());
console.log(employees);