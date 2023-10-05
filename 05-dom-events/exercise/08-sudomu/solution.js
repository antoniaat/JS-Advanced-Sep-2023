function solve() {
  const container = document.querySelector('tfoot');
  const input = document.querySelectorAll('input');
  const table = document.querySelector('table');
  const result = document.querySelector('#check p');

  container.addEventListener('click',  (event) => {
    const target = event.target;

    if (target.textContent === 'Quick Check') {
      quickCheck();
    } else if (target.textContent === 'Clear') {
      reset();
    }
  });

  function quickCheck() {
    const columnsWithRows = [];
    for (let i = 0; i < input.length; i += 3) {
      let row = [];
      row.push(input[i].value);
      row.push(input[i + 1].value);
      row.push(input[i + 2].value);
      columnsWithRows.push(row);
    }
    let isValid = false;

 const sum = columnsWithRows[0].reduce((a, b) => a + b);

    for (let i = 0; i < columnsWithRows.length; i++) {
      let curRowSum = columnsWithRows[i].reduce((a, b) => a + b);

      let colSum = 0;
      for (let j = 0; j < columnsWithRows[i].length; j++) {
        colSum += columnsWithRows[j][i];
      }

      if (colSum !== sum || curRowSum !== sum) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      table.style.border = '2px solid green';
      result.style.color = 'green';
      result.textContent = 'You solve it! Congratulations!';
    } else {
      table.style.border = '2px solid red';
      result.style.color = 'red';
      result.textContent = 'NOP! You are not done yet...';
    }
  }

  function reset() {
    for (let field of input) {
      field.value = '';
      result.textContent = '';
      table.style.border = 'none';
    }
  }
}
