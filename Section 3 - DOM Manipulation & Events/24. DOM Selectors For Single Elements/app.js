// document.getElementById()

// console.log(document.getElementById('task-title'));

//  SECTION Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').style);
// console.log(
// 	document.getElementById('task-title').className
// );

//  SECTION Change styling
// let taskId = 'task-title';
// document.getElementById(taskId).style.background =
// 	'#444444';
// document.getElementById(taskId).style.color = 'red';

// SECTION Change content
// document.getElementById(taskId).textContent = 'Task List';
// document.getElementById(taskId).innerText = 'My Tasks';
// document.getElementById(taskId).innerHTML =
// 	'<span style="color:red">Task List!!</span>';

// SECTION Query Selector - single item
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'green';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'purple';
document.querySelector('li:nth-child(3)').textContent = 'HELLO';

// NOTE WILL NOT SELECT ALL ODD CHILDREN
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
