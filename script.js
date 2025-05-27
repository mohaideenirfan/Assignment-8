document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'list-group-item';

  const span = document.createElement('span');
  span.textContent = taskText;
  span.style.cursor = 'pointer';
  span.addEventListener('click', function () {
    span.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'btn btn-danger btn-sm float-end';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
});
