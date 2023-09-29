function generateReport() {

    const isChecked = document.querySelectorAll('thead tr th input');
    const tBody = document.querySelectorAll('tbody tr')
    const output = document.getElementById('output')

    let result = [];

    for (let i = 0; i < tBody.length; i++){
        let currentObj = {};
        for (let x = 0; x < isChecked.length; x++){
           if (isChecked[x].checked){
            currentObj[isChecked[x].parentElement.textContent.trim().toLocaleLowerCase()] = tBody[i].children[x].textContent;
           }
        }
        result.push(currentObj)
    }
    output.value = JSON.stringify(result);
}