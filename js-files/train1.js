console.log("helldo");

console.log("helldo");

//window.alert("ooops you are bad!");

let x = 10;
let name = "ektoras";
let i = false;

x += 1;
name = name + 1;

/*console.log('jdj',x);
console.log("hi",name);
console.log(i, "oksi");*/

//document.getElementById("p1").innerHTML = "hello " + x;
//document.getElementById("p2").innerHTML = "hello " + name;

//let age = window.prompt("age: ");
let y;
let z; 

y = String(3.12);
z = Boolean("");

console.log(typeof age);

/*age = Number(age);
age += 1;*/

//console.log(age);

//console.log(typeof age);
console.log(typeof y);


/*let username;

document.getElementById("mb").onclick = function(){
    username = document.getElementById("lname").value;
    console.log(username);
    document.getElementById("p3").innerHTML = "hello " + username;
}*/

/*const P = 3.14;
let r;
let c;

r = window.prompt("r: ");
r = Number(r);

c = 2 * P *r;

console.log(c);*/

/*let a = 2.2;
let b = 77;
let c;
//a = Math.round(a);
//a = Math.floor(a);
//a = Math.ceil(a);
//a = Math.pow(a, 2);
//a = Math.sqrt(a);
//a = Math.abs(a);

//c = Math.max(a,b);
//c = Math.min(a,b);

//a = Math.PI

console.log(a);*/

let count = 0;

document.getElementById("db").onclick = function(){
    count -= 1;
    document.getElementById("cl").innerHTML = count;

}

document.getElementById("rb").onclick = function(){
    count = 0;
    document.getElementById("cl").innerHTML = count;
}

document.getElementById("ib").onclick = function(){
    count += 1;
    document.getElementById("cl").innerHTML = count;
}

let a = Math.floor(Math.random() * 6) + 1;

console.log(a);


