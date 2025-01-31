
const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDesc = document.getElementById('taskDesc');
const taskTime = document.getElementById('taskTime');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Estimated Time: ${task.estimatedTime}</p>
      <p>Remaining Time: <span id="timer-${index}">Not Started</span></p>
      <p>Points: ${task.points}</p>
      <button class="start" onclick="startTimer(${index})">Start Now</button>
      <button class="end" onclick="endTimer(${index})">End Now</button>
      <button class="edit" onclick="editTask(${index})">Edit</button>
      <button class="delete" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(taskDiv);
  });
}

function startTimer(index) {
  const task = tasks[index];
  if (task.timer) return; 

  const estimatedEndTime = new Date(task.estimatedTime).getTime();
  const now = Date.now();

  task.timer = setInterval(() => {
    const remainingTime = estimatedEndTime - Date.now();
    if (remainingTime <= 0) {
      clearInterval(task.timer);
      task.timer = null;
      document.getElementById(`timer-${index}`).innerText = 'Task Failed, Time Expired';
      task.points -= 10;
      renderTasks();
    } else {
      document.getElementById(`timer-${index}`).innerText = `${Math.ceil(remainingTime / 1000)} seconds remaining`;
    }
  }, 1000);
}

function endTimer(index) {
  const task = tasks[index];
  if (!task.timer) return;

  clearInterval(task.timer);
  task.timer = null;
  document.getElementById(`timer-${index}`).innerText = 'Task Completed';

  const now = Date.now();
  const estimatedEndTime = new Date(task.estimatedTime).getTime();

  if (now <= estimatedEndTime) {
    task.points += 10;
  } else {
    task.points -= 10;
  }
  renderTasks();
}

function addTask(event) {
  event.preventDefault();

  const newTask = {
    title: taskTitle.value,
    description: taskDesc.value,
    estimatedTime: taskTime.value,
    points: 0,
    timer: null
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
  taskForm.reset();
}

function editTask(index) {
  const task = tasks[index];
  taskTitle.value = task.title;
  taskDesc.value = task.description;
  taskTime.value = task.estimatedTime;

  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

taskForm.addEventListener('submit', addTask);
window.addEventListener('beforeunload', () => {
  const completedTasks = tasks.filter(task => task.points > 0).length;
  const pendingTasks = tasks.length - completedTasks;
  alert(`Completed Tasks: ${completedTasks}, Pending Tasks: ${pendingTasks}`);
});

renderTasks();
