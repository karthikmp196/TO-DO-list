const newTaskInput = document.getElementById("newTask");
const addButton = document.getElementById("addbutton");
const TaskList = document.getElementById("Tasklist");

function addNewTask(text) {
  const Task = document.createElement("li");
  Task.classList.add("Task");   //Adding user entered task to the list

  const TaskText = document.createElement("span");  //create an element to enter the tasktext
  TaskText.classList.add("Tasktext");
  TaskText.textContent = text;

  const editButton = document.createElement("button");   //Button element is created for editing tasks
  editButton.classList.add("editbutton");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editTask(Task, TaskText));  //function that is to be called on the event of clicking edit button

  const deleteButton = document.createElement("button");   //Button element is created for deleting tasks
  deleteButton.classList.add("deletebutton");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => removeTask(Task));   //function that is to be called on the event of clicking delete button

  Task.appendChild(TaskText);
  Task.appendChild(editButton); //Appending edit button as a child to the task element
  Task.appendChild(deleteButton);  //Appending delete button as a child to the task element

  TaskList.appendChild(Task);  //Append the tasks to the tasklist as a child

  newTaskInput.value = "";    //creating an empty string to enter the next task in the input span
}

function Buttonadd() { 
  const newTaskText = newTaskInput.value;
  if (!newTaskText) return; 

  addNewTask(newTaskText);   //calling the newTask function with parameter received from newTaskInput element
}

addButton.addEventListener("click", Buttonadd);

function removeTask(Task) {
  TaskList.removeChild(Task);  //Removing the task from the task list that is entered as a child
}

function editTask(Task, TaskText) {
  const newText = prompt("Enter new text:");
  if (!newText) return; 

  TaskText.textContent = newText;    //new task is received from the entered task newText element
}
