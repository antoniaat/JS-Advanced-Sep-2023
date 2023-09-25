function subtract() {
    let firstNUm = document.getElementById("firstNumber").value;
    let secNum = document.getElementById("secondNumber").value;
    let sum = Number(firstNUm) - Number(secNum);
    document.getElementById("result").textContent = sum; 
}