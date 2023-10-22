window.addEventListener('load', solution);
 
function solution() {
  const button = document.querySelector('#add-btn');
  let employee = document.querySelector('#employee');
  let category = document.querySelector('#category');
  let urgency = document.querySelector('#urgency');
  let assigned = document.querySelector('#team');
  let description = document.querySelector('#description');
 
  function adding(e) {
    e.preventDefault();
    if (employee.value !== '' && category.value !== '' && urgency.value !== '' && assigned.value !== '' && description.value !== '') {
      preview_list(employee.value, category.value, urgency.value, assigned.value, description.value, '.preview-list')
      employee.value = '';
      category.value = '';
      urgency.value = '';
      assigned.value = '';
      description.value = '';
      button.setAttribute('disabled', true);
    } else {
      return;
    }
  }
 
  const remove_preview = function (emp, cat, urg, ass, disc) {
    employee.value = emp;
    category.value = cat;
    urgency.value = urg;
    assigned.value = ass;
    description.value = disc;
    button.removeAttribute('disabled', true);
    let li = document.querySelector('.problem-content')
    li.remove();
  } 
 
  const cleared = function () {
    let li2 = document.querySelector('.resolved-list li');
    li2.remove();
    button.removeAttribute('disabled', true);
  }
 
  function preview_list(emp, cat, urg, ass, disc, which) {
    let preview_list_value = document.querySelector(which);
    preview_list_value.style.display = 'flex';
    let li = document.createElement('li');
    li.className = 'problem-content';
    let article = document.createElement('article');
    article.style.display = 'flex';
    let p_emp = document.createElement('p');
    let p_cat = document.createElement('p');
    let p_urg = document.createElement('p');
    let p_ass = document.createElement('p');
    let p_disc = document.createElement('p');
    p_emp.textContent = emp;
    p_cat.textContent = cat;
    p_urg.textContent = urg;
    p_ass.textContent = ass;
    p_disc.textContent = disc;
    article.append(p_emp, p_cat, p_urg, p_ass, p_disc);
    let li2, button1, button2;
    button1 = document.createElement('button');
    button2 = document.createElement('button');
    switch (which) {
        case '.preview-list':
            button1.className = 'edit-btn';
            button2.className = 'continue-btn';
            button1.textContent = 'Edit';
            button2.textContent = 'Continue';
            button1.addEventListener('click', function () { remove_preview(emp, cat, urg, ass, disc) });
            button2.addEventListener('click', function () { preview_list(emp, cat, urg, ass, disc, '.pending-list') });
            li.append(article,button1,button2);
        break;
        case '.pending-list':
            button1.className = 'resolve-btn';
            button1.textContent = 'Resolved';
            button1.addEventListener('click', function () { preview_list(emp, cat, urg, ass, disc, '.resolved-list') });
            li.append(article, button1);
            li2 = document.querySelector('.preview-list li');
            li2.remove();
        break;
        case '.resolved-list':
            button1.className = 'clear-btn';
            button1.textContent = 'Clear';
            button1.addEventListener('click', function () { cleared() });
            li.append(article, button1);
            li2 = document.querySelector('.pending-list li');
            li2.remove();
        break;
    }    
    preview_list_value.appendChild(li);
  }
 
  button.addEventListener('click', adding);
}