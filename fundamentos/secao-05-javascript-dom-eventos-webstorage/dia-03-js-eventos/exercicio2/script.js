const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const getMonthDays = document.getElementById("days");
const monthDays = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const createLiElement = document.createElement("li");
    createLiElement.innerHTML = decemberDaysList[index];
    createLiElement.classList.add("day");
    getMonthDays.appendChild(createLiElement);
    if (
      decemberDaysList[index] === 24 ||
      decemberDaysList[index] === 25 ||
      decemberDaysList[index] === 31
    ) {
      createLiElement.classList.add("holiday");
    }
    if (
      decemberDaysList[index] === 4 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18 ||
      decemberDaysList[index] === 25
    ) {
      createLiElement.classList.add("friday");
    }
  }
};

monthDays();

const createButton = (id, content) => {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.type = "button";
  button.innerHTML = content;
  const findButtons = document.getElementsByClassName("buttons-container")[0];
  findButtons.appendChild(button);
};

createButton("btn-holiday", "Feriados");

let verifierHoliday = false;
const holidayButton = document.getElementById("btn-holiday");
holidayButton.addEventListener("click", () => {
  const holidays = document.querySelectorAll(".holiday");
  if (verifierHoliday === false) {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = "orange";
      verifierHoliday = true;
    }
  } else {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
      verifierHoliday = false;
    }
  }
});

createButton("btn-friday", "Sexta-Feira");

const fridayButton = document.getElementById("btn-friday");
let verifierFriday = false;
let fridaysContent = [];
fridayButton.addEventListener("click", () => {
  const fridays = document.querySelectorAll(".friday");
  if (verifierFriday === false) {
    for (let index = 0; index < fridays.length; index += 1) {
      fridaysContent.push(fridays[index].innerHTML);
      fridays[index].innerHTML = "ACABOU!";
    }
    verifierFriday = true;
  } else {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerHTML = fridaysContent[index];
    }
    verifierFriday = false;
    fridaysContent = [];
  }
});

const getDays = document.getElementsByClassName("day");
for (let index = 0; index < getDays.length; index += 1) {
  getDays[index].addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "40px";
  });
  getDays[index].addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "20px";
  });
}

const createTask = (task, color) => {
  const myTask = document.createElement("span");
  myTask.innerHTML = `${task} <br>`;
  document.getElementsByClassName("my-tasks")[0].appendChild(myTask);
};

const colorCaption = (color) => {
  const myDiv = document.createElement("div");
  myDiv.className = "task";
  myDiv.style.backgroundColor = color;
  document.getElementsByClassName("my-tasks")[0].appendChild(myDiv);
};

colorCaption("green");
createTask("Ir malhar!");
colorCaption("red");
createTask("Estudar programação!");

const setTaskClass = () => {
  let myTasks = document.querySelectorAll(".task");
  for (let index = 0; index < myTasks.length; index += 1) {
    myTasks[index].addEventListener("click", (event) => {
      if (event.target.classList.contains("selected")) {
        for (let index2 = 0; index2 < myTasks.length; index2 += 1) {
          myTasks[index2].classList.remove("selected");
        }
      } else {
        for (let index2 = 0; index2 < myTasks.length; index2 += 1) {
          myTasks[index2].classList.remove("selected");
        }
        event.target.className = "task selected";
      }
    });
  }
};

setTaskClass();

const setDayColor = () => {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  days.addEventListener("click", (event) => {
    let eventTargetColor = event.target.style.color;
    let taskColor = selectedTask[0].style.backgroundColor;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      event.target.style.color = taskColor; 
    } else {
      event.target.style.color = "rgb(119,119,119)";
    }

  });
};

setDayColor();


const addNewTask = () => {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();