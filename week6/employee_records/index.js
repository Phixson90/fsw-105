const employee = ["Bob", "Jason", "Scot", "Sandra"]

function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.full_time = function(){
        console.log(this.status)
    }
    
}

const printEmployeeForm1 = new Employee("Bob", "V School Instructor", "$3,000 per hour", "part time")
const printEmployeeForm2 = new Employee("Jason", "RSE Mechanic", "$41.69/hour")
const printEmployeeForm3 = new Employee("Scot", "Toolmaker", "$44.12/hour")
const printEmployeeForm4 = new Employee("Sandra", "Programmer/Engineer", "$75.34/hour")

console.log(printEmployeeForm1)
console.log(printEmployeeForm2)
console.log(printEmployeeForm3)
console.log(printEmployeeForm4)