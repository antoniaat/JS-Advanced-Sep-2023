function attachEventsListeners() {
    const buttonsRef = Array.from(document.querySelectorAll('input[type=button]'));
    buttonsRef.forEach(button => button.addEventListener('click', onClickHandler));

    function onClickHandler(event){
        let divRef = event.target.parentNode;
        let unit = divRef.children[0].textContent;
        
        let days = 0;
        switch (unit) {
            case 'Days: ': days = Number(divRef.children[1].value); break;
            case 'Hours: ': days = Number(divRef.children[1].value) / 24; break;
            case 'Minutes: ': days = Number(divRef.children[1].value) / 60 / 24 ;break;
            case 'Seconds: ': days = Number(divRef.children[1].value) / 60 / 60 / 24;break;

        }
        let objUnits = {
            'Days': days,
            'Hours': days * 24,
            'Minutes': days * 60 * 24,
            'Seconds': days * 60 * 60 * 24
        };
        const divs = Array.from(document.querySelectorAll('div'));
        divs[0].children[1].value = objUnits.Days;
        divs[1].children[1].value = objUnits.Hours;
        divs[2].children[1].value = objUnits.Minutes;
        divs[3].children[1].value = objUnits.Seconds;
    }
    
}