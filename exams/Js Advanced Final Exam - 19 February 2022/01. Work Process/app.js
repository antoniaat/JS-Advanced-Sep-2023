function solve() {
    const firstNameEl = document.getElementById('fname');
    const lastNameEl = document.getElementById('lname');
    const emailEl = document.getElementById('email');
    const birthEl = document.getElementById('birth');
    const positionEl = document.getElementById('position');
    const salaryEl = document.getElementById('salary');
    const tbodyEl = document.getElementById('tbody');
    const budgetMsg = document.getElementById('sum');
    const addBtn = document.getElementById('add-worker');

    addBtn.addEventListener('click', hireWorker);

    function hireWorker(e) {
        e.preventDefault();

        const firstName = firstNameEl.value;
        const lastName = lastNameEl.value;
        const email = emailEl.value;
        const birth = birthEl.value;
        const position = positionEl.value;
        const salary = salaryEl.value;

        if (!firstName || !lastName || !email || !birth || !position || !salary) {
            return;
        }

        clearInputData();
        createTableRow(firstName, lastName, email, birth, position, salary);
        addToBudget(salary);
        

        const editBtns = Array.from(document.querySelectorAll('.edit'));
        editBtns.forEach(button => button.addEventListener('click', editInfo));

        const fireBtns = Array.from(document.querySelectorAll('.fired'));
        fireBtns.forEach(button => button.addEventListener('click', fireWorker));
    }

    function clearInputData() {
        firstNameEl.value = "";
        lastNameEl.value = "";
        emailEl.value = "";
        birthEl.value = "";
        positionEl.value = "";
        salaryEl.value = "";
    }
    function createTableRow(firstName, lastName, email, birth, position, salary) {
        const trEl = document.createElement('tr');
        trEl.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${birth}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td>
        <button class="fired">Fired</button>
        <button class="edit">Edit</button>
        </td>`

        tbodyEl.appendChild(trEl);
    }

    function addToBudget(salary) {
        let currentBudget = Number(budgetMsg.textContent);
        let newBudget = currentBudget + Number(salary);
        budgetMsg.textContent = newBudget.toFixed(2);
    }

    function editInfo(e) {
        const trArray = Array.from(e.target.parentElement.parentElement.children);

        firstNameEl.value = trArray[0].textContent;
        lastNameEl.value = trArray[1].textContent;
        emailEl.value = trArray[2].textContent;
        birthEl.value = trArray[3].textContent;
        positionEl.value = trArray[4].textContent;
        salaryEl.value = trArray[5].textContent;

        removeFromBudget(salaryEl.value);

        e.target.parentElement.parentElement.remove();
    }

    function removeFromBudget(salary) {
        let currentBudget = Number(budgetMsg.textContent);
        let newBudget = currentBudget - Number(salary);
        budgetMsg.textContent = newBudget.toFixed(2);
    }

    function fireWorker(e) {
        const trArray = Array.from(e.target.parentElement.parentElement.children);
        let workerSalary = Number(trArray[5].textContent);

        removeFromBudget(workerSalary);
        e.target.parentElement.parentElement.remove();
    }
}
solve()