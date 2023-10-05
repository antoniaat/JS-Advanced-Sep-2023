window.addEventListener('load', solve);

function solve() {

    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const numberElement = document.getElementById('contact-number');
    const typeElement = document.getElementById('class-type');
    const timeElement = document.getElementById('class-time');

    const nextButton = document.getElementById('next-btn');

    const previewUlElement = document.querySelector('ul.class-info');
    const confirmUlElement = document.querySelector('ul.confirm-class');

    nextButton.addEventListener('click', next);

    function next(e) {
        e.preventDefault();

        if (nameElement.value === '' ||
            emailElement.value === '' ||
            numberElement.value === '' ||
            typeElement.value === '' ||
            timeElement.value === '') {
            return;
        }

        let listElement = document.createElement('li');
        listElement.className = 'info-item';
        previewUlElement.appendChild(listElement);

        let articleElement = document.createElement('article');
        articleElement.className = 'personal-info';
        listElement.appendChild(articleElement);

        let nameParagraph = document.createElement('p');
        nameParagraph.textContent = nameElement.value;
        articleElement.appendChild(nameParagraph);

        let emailParagraph = document.createElement('p');
        emailParagraph.textContent = emailElement.value;
        articleElement.appendChild(emailParagraph);

        let numberParagraph = document.createElement('p');
        numberParagraph.textContent = numberElement.value;
        articleElement.appendChild(numberParagraph);

        let classParagraph = document.createElement('p');
        classParagraph.textContent = typeElement.value;
        articleElement.appendChild(classParagraph);

        let timeParagrah = document.createElement('p');
        timeParagrah.textContent = timeElement.value;
        articleElement.appendChild(timeParagrah);

        let leftButton = document.createElement('button');
        leftButton.className = 'edit-btn';
        leftButton.textContent = 'Edit';
        listElement.appendChild(leftButton);

        let rightButton = document.createElement('button');
        rightButton.className = 'continue-btn';
        rightButton.textContent = 'Continue';
        listElement.appendChild(rightButton);

        nextButton.disabled = "true";

        let editName = document.getElementById('name').value;
        let editEmail = document.getElementById('email').value;
        let editContact = document.getElementById('contact-number').value;
        let editType = document.getElementById('class-type').value;
        let editTime = document.getElementById('class-time').value;

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contact-number').value = '';
        document.getElementById('class-type').value = '';
        document.getElementById('class-time').value = '';


        leftButton.addEventListener('click', edit);

        function edit() {
            listElement.remove();
            nextButton.disabled = false;

            document.getElementById('name').value = editName;
            document.getElementById('email').value = editEmail;
            document.getElementById('contact-number').value = editContact;
            document.getElementById('class-type').value = editType;
            document.getElementById('class-time').value = editTime;
        }

        rightButton.addEventListener('click', continueAppointment);

        function continueAppointment() {
            listElement.remove();
            confirmUlElement.appendChild(listElement);
            listElement.className = 'continue-info';

            leftButton.className = 'cancel-btn';
            leftButton.textContent = 'Cancel';
            leftButton.removeEventListener('click', edit);

            rightButton.className = 'confirm-btn';
            rightButton.textContent = 'Confirm';
            rightButton.removeEventListener('click', continueAppointment);

            leftButton.addEventListener('click', abort);

            function abort() {

                listElement.remove();
                nextButton.disabled = false;
            }

            rightButton.addEventListener('click', finalise);

            function finalise() {
                document.getElementById('main').remove();

                let heading = document.createElement('h1');
                heading.id = 'thank-you';
                heading.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";

                let button = document.createElement('button');
                button.id = 'done-btn';
                button.textContent = 'Done';

                document.getElementById('body').appendChild(heading);
                document.getElementById('body').appendChild(button);

                button.addEventListener('click', reload);

                function reload() {
                    window.location.reload();
                }
            }
        }
    }
}




