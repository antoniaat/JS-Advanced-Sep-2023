class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }
        
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
        
    }

    bestDepartment() {
        let bestAvgSalary = 0;
        let bestCompany = '';
        let output = '';
        let keysCompany = Object.keys(this.departments);
        for (const company of keysCompany) {
            let companyInfo = this.departments[company];
            let sortedSalary = companyInfo.sort((a, b) => {if(a.salary === b.salary){
            return a.name.localeCompare(b.name)} else {return b.salary - a.salary}});
            let salary = 0;
            for (let i = 0; i < sortedSalary.length; i++) {
                const element = sortedSalary[i];
                salary += element.salary;
            }
            if (bestAvgSalary < salary / sortedSalary.length) {
                bestAvgSalary = salary / sortedSalary.length;
                bestCompany = company;
                output = `Best Department is: ${bestCompany}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n`
                sortedSalary.forEach(element => {
                    let employee = element.name;
                    let salary = element.salary;
                    let position = element.position;
                    output += `${employee} ${salary} ${position}\n`;
                });
            }
        }
        return output;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Stanimir", 120000, "digital marketing manager", "Marketing");
c.addEmployee("Gosho", 13500, "HR", "Human resources");
console.log(c.bestDepartment());