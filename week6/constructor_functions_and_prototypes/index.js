var employees = [];

function employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;


}


employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name);
    console.log("Job title: " + this.jobTitle);
    console.log("Salary: " + this.salary);
    console.log("Status: " + this.status);
}

employee.prototype.status = "Full Time"

var scot = new employee("Scot", "Toolmaker", "$44.50 Per Hour");
scot.printEmployeeForm();
employees.push(scot);

var kourtney = new employee("Kourtney", "Mom and Wife", "Not Enough $ Per Hour");
kourtney.status = "24/7";
kourtney.printEmployeeForm();
employees.push(kourtney);

var kevin = new employee("Kevin", "Cabinet Maker", "$750,000 Annually");
kevin.status = "Part Time";
kevin.printEmployeeForm();
employees.push(kevin);
