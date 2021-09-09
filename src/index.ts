
abstract class Employee {
    name: string;
    constructor (name:string) {
        this.name = name;
    }

    abstract calcPay(): number;
    printPay(): void {
        console.log(this.name + " is paid $" + this.calcPay().toFixed(2));
    }
}

class Volunteer extends Employee {
    constructor(name: string) {
        super (name);
    }
    
    calcPay(): number {
        return 0;
    }
}

//console.log(new Volunteer('Heidi'));
//console.log(new Volunteer('Heidi').calcPay());
//new Volunteer('Heidi').printPay();

class SalaryEmployee extends Employee {
    annualSalary: number;
    constructor(name: string, annualSalary: number) {
        super (name);
        this.annualSalary = annualSalary;
    }

    calcPay(): number {
        return this.annualSalary/26;
    }
}

class HourlyEmployee extends Employee {
    hourlyWage: number;
    hoursWorked: number;
    constructor(name: string, hourlyWage: number, hoursWorked: number) {
        super (name);
        this.hourlyWage = hourlyWage;
        this.hoursWorked = hoursWorked;
    }

    calcPay(): number {
        return this.hourlyWage * this.hoursWorked;
    }
}

let employees: Employee[] = [];
employees.push(new Volunteer('Heidi'));
employees.push(new SalaryEmployee('Kristin', 98562.43));
employees.push(new HourlyEmployee('Chance', 18, 40));
for (let i = 0; i < employees.length; i++){
    employees[i].printPay();
}