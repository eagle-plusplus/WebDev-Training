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

/*let count = 0;

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

console.log(a);*/

/*let username = "jcdisGGGGodjioc          ";
let phone = "89808-080";

console.log(username.length);
console.log(username.charAt(0));
console.log(username.indexOf("c"));
console.log(username.lastIndexOf("c"));
console.log(username.trim());
console.log(username.toLocaleUpperCase());
console.log(username.toLocaleLowerCase());

phone = phone.replaceAll("-","kk");

console.log(phone);*/

/*let username = "jcdisGGG Godjio";
let first;
let last;

last = username.slice(username.indexOf(" ") + 1);
first = username.slice(0, username.indexOf(" "));

console.log(first);
console.log(last);*/

/*let ag = 21;

if(ag>21){
    console.log("adult");
}else if(ag < 0){
    console.log("what");
}else{
    console.log("child");
}

let online = true;

if(online){
    console.log("mkl");
}*/

document.getElementById("subb").onclick = function(){
    if(document.getElementById("k").checked){
        console.log("You sub");
    }else{
        console.log("no sub");
    }

    if(document.getElementById("a").checked){
        console.log("You can drive");
    }else{
        console.log("You cannot drive");
    }
}

