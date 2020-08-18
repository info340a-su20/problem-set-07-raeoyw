'use strict';

/* your code goes here! */
class Task {
  constructor(descr, isComplete) {
    this.description = descr; //same as JAVA
    this.complete = isComplete;
  }

  render() {
    let elem = document.createElement('li');
    if(this.complete) {
      elem.classList.add('font-strike');
    }
    elem.textContent = this.description;

    elem.addEventListener('click', () => { //arrow function
      this.toggleFinished(); //this is the li element, and this element has no toggleFinished() function
      elem.classList.toggle('font-strike'); //cross and uncross the item
    })

    return elem;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }

}
// Test:
// let temp = new Task("I'm a temp!", true);
// let domElement = tempTask.render();
// document.querySelector('#app').appendChild(domElement);
// console.log(domElement);


class TaskList {
  constructor(taskArray) {
    this.tasks = taskArray;
  }

  addTask(description) {
    let task = new Task(description, false);
    this.tasks.push(task);
  }

  render() {
    let elem = document.createElement('ol');

    for(let task of this.tasks) {
      let taskElem = task.render();
      elem.appendChild(taskElem);
    }

    return elem;
  }
}
// Test:
// let tempTaskArray = [
//   new Task("I'm a temp!", true),
//   new Task('Me too!', false),
//   new Task('Learn arrow functions', true)
// ];
// let tempTaskList = new TaskList(tempTaskArray);
// let domElement = tempTaskList.render();
// document.querySelector('#app').appendChild(domElement);


class NewTaskForm {
  constructor(submitCallback){
    this.submitCallback = submitCallback; //this is a function!

  }

  render() {
    let form = document.createElement('form');

    let input = document.createElement('input');
    input.classList.add('form-control', 'mb-3');
    input.setAttribute("placeholder", "What else do you have to do?");
    form.appendChild(input);

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary')
    button.textContent = "Add task to list";
    button.addEventListener('click', (event) => {
      event.preventDefault();

      this.submitCallback(input.value); //follow the recipe!
      //addTaskToList()
    })

    form.appendChild(button);

    return form;
  }
}

class App {
  constructor(parentElement, taskList){
    this.parentElement = parentElement; //takes in element itself
    this.taskList = taskList;
  }

  render() {
    this.parentElement.appendChild(this.taskList.render())

    //let recipeWithName = this.addTaskToList.bind(this); //new paper with name
    // let recipeWithName = (descr) => {
    //   //I know the cook, tell him to do stuff
    //   this.addTaskToLdescr)
    // }

    let taskForm = new NewTaskForm((descr) => {this.addTaskToList(descr)}); //refer to recipe by name
    this.parentElement.appendChild(taskForm.render());
  }

  addTaskToList(description) {
    this.taskList.addTask(description);
    
    this.parentElement.innerHTML = '';
    this.render();
  }
}

let taskList = new TaskList(
  [
    new Task('Make some classes', true),
    new Task('Arrow some functions', false),
  ]
)

let appElem = document.querySelector('#app'); //reference to that element
let app = new App(appElem, taskList);
app.render();

// appElem.appendChild(taskList.render())


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}