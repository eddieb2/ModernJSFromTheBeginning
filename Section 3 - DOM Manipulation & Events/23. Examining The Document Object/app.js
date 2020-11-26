let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.characterSet;
val = document.contentType;

val = document.forms;
// undefined
// val = document.forms[1];
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];
val = document.links[0].classList[0].valueOf();

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);

// NOTE HTML COLLECTIONS
let scripts = document.scripts;

// ERRROR
// scripts.array.forEach((element) => {
// 	console.log(element);
// });

let scriptsArr = Array.from(scripts);

scriptsArr.forEach((ele) => {
	console.log('scripts html collection item: ', ele);
});
