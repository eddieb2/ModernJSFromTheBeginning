// SECTION document.getElementsByClassName();

// NOTE Returns an HTML Collection
const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[0].textContent = 'HELLO';

const listItems = document
	.querySelector('ul')
	.getElementsByClassName('collection-item');

console.log(listItems);

let lis = document.getElementsByTagName('li');
console.log(lis);

lis[0].style.color = 'green';
lis[3].textContent = 'HIIIIIIII';

lis = Array.from(lis);

lis.reverse();

lis.forEach((element) => {
	element.style.color = 'red';
});

console.log(lis);

// SECTION document.querySelectorAll() -- NodeList's don't need to be converted into arrays like HTML collections.

let test = document.querySelectorAll(
	'ul.collection li.collection-item'
);

test.forEach((ul) => {
	console.log('ul: ', ul);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((odd) => {
	odd.style.backgroundColor = 'gray';
});

liEven.forEach((even) => {
	even.style.backgroundColor = 'lightgray';
});

console.log(test);
