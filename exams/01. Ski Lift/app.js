window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.querySelector('#first-name');
    const lastNameElement = document.querySelector('#last-name');
    const peopleCountElement = document.querySelector('#people-count');
    const fromDateElement = document.querySelector('#from-date');
    const daysElement = document.querySelector('#days-count');

    const previewInfoUl = document.querySelector('ul.ticket-info-list');
    const confirmInfoUl = document.querySelector('ul.confirm-ticket');

    const button = document.querySelector('#next-btn');

    button.addEventListener("click", previewTicket);

    function previewTicket(e) {
        e.preventDefault();

        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const peopleCount = peopleCountElement.value;
        const fromDate = fromDateElement.value;
        const days = daysElement.value;

        if (!firstName || !lastName || !peopleCount || !fromDate || !days) {
            return;
        }

        emptyInput(firstNameElement, lastNameElement, peopleCountElement, fromDateElement, daysElement);
        createListItem(previewInfoUl, firstName, lastName, peopleCount, fromDate, days);
    }

    function emptyInput(firstNameElement, lastNameElement, peopleCountElement, fromDateElement, daysElement) {
        firstNameElement.value = '';
        lastNameElement.value = '';
        peopleCountElement.value = '';
        fromDateElement.value = '';
        daysElement.value = '';
        button.disabled = true;
    }
    
    function createListItem(previewInfoUl, firstName, lastName, peopleCount, fromDate, days) {
        const listElement = document.createElement('li');
        listElement.classList.add('ticket');
        previewInfoUl.appendChild(listElement);

        listElement.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${days} days</p>
        <p>For ${peopleCount} people</p>
        </article>`

        createButtons(listElement);
    }

    function createButtons(listElement) {
        const liRef = listElement;

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue'

        liRef.appendChild(editButton);
        liRef.appendChild(continueButton);

        editButton.addEventListener('click', editInfo);
        continueButton.addEventListener('click', proceedInfo);
    }

    function editInfo(e) {
        const liRef = e.target.parentNode;
        const data = Array.from(liRef.children[0].children).map(x => x = x.textContent);
        
        const firstName = data[0].split(' ')[1];
        const lastName = data[0].split(' ')[2];
        const date = data[1].split(' ')[2];
        const daysCount = data[2].split(' ')[1];
        const peopleCount = data[3].split(' ')[1];
        
        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        peopleCountElement.value = peopleCount;
        fromDateElement.value = date;
        daysElement.value = daysCount;

        liRef.remove();
        button.disabled = false;
    }

    function proceedInfo(e) {
        const liRef = e.target.parentNode;
        liRef.children[1].remove();
        liRef.children[1].remove();
        liRef.remove();

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';

        liRef.appendChild(confirmButton);
        liRef.appendChild(cancelButton);
        confirmInfoUl.appendChild(liRef);

        confirmButton.addEventListener('click', finishBooking);
        cancelButton.addEventListener('click', abortOperation);
    }

    function abortOperation(e) {
        const liRef = e.target.parentNode;
        liRef.remove();
        button.disabled = false;
    }

    function finishBooking(e) {
        document.querySelector('#main').remove();
        const h1El = document.createElement('h1');
        h1El.id = 'thank-you';
        h1El.textContent = 'Thank you, have a nice day!'
        const button = document.createElement('button');
        button.id = 'back-btn';
        button.textContent = 'Back';

        document.querySelector('#body').appendChild(h1El);
        document.querySelector('#body').appendChild(button);

        button.addEventListener('click', reload);
    }

    function reload(e) {
        window.location.reload();
    }
}


    
    
