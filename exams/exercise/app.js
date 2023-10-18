window.addEventListener("load", solve);

function solve() {
  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");
  const ageRef = document.getElementById("age");
  const storyTitleRef = document.getElementById("story-title");
  const genreRef = document.getElementById("genre");
  const storyTextRef = document.getElementById("story");
  const publishBtn = document.getElementById("form-btn");
  const previewAreaRef = document.getElementById("preview-list");
  const mainPageRef = document.getElementById("main");

  publishBtn.addEventListener("click", createContent);

  function createContent() {
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let age = ageRef.value;
    let storyTitle = storyTitleRef.value;
    let genre = genreRef.value;
    let storyText = storyTextRef.value;
    if (!firstName || !lastName || !age || !storyTitle || !storyText) {
      return;
    }
    let content = createStory(firstName, lastName, age, storyTitle, genre, storyText)
  }

  function createStory(firstName, lastName, age, storyTitle, genre, storyText) {
    publishBtn.disabled = false;
    let li = document.createElement("li");
    li.classList.add("story-info");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName} ${lastName}`;
    let pAge = document.createElement("p");
    pAge.textContent = `Age: ${age}`;
    let pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitle}`;
    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genre}`;
    let pStoryText = document.createElement("p");
    pStoryText.textContent = `${storyText}`;
    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStoryText);
    li.appendChild(article);
    previewAreaRef.appendChild(li);
    let saveButton = document.createElement("button");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    saveButton.textContent = `Save Story`;
    editButton.textContent = `Edit Story`;
    deleteButton.textContent = `Delete Story`;
    saveButton.classList.add('save-btn');
    editButton.classList.add('edit-btn');
    deleteButton.classList.add('delete-btn');
    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    clearFields();
    publishBtn.disabled = true;
    editButton.disabled = false;
    editButton.addEventListener("click", (e) => {
      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      ageRef.value = age;
      storyTitleRef.value = storyTitle;
      storyTextRef.value = storyText;
      genreRef.value = genre;
      previewAreaRef.removeChild(li);
      publishBtn.disabled = false;
    });
    deleteButton.disabled = false;
    deleteButton.addEventListener("click", (e) => {
      previewAreaRef.removeChild(li);
      publishBtn.disabled = false;
    });
    saveButton.disabled = false;
    saveButton.addEventListener("click", (e) => {

      mainPageRef.innerHTML = '<h1>Your scary story is saved!</h1>';
    })
  }

  function clearFields() {
    firstNameRef.value = '';
    lastNameRef.value = '';
    ageRef.value = '';
    storyTitleRef.value = '';
    storyTextRef.value = '';
    genreRef.selectedIndex = 0;
  }
}
