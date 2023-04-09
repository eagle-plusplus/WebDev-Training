console.log("helldo");

console.log("helldo");

//window.alert("ooops you are bad!");

/*let x = 10;
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

//y = String(3.12);
//z = Boolean("");

//console.log(typeof age);

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

/*document.getElementById("subb").onclick = function(){
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
}*/

/*let grade = "b";

switch(grade){
    case "a":
        console.log("good");
        break;
    case "b":
        console.log("ok");
        break;
    default:
        console.log("EISAI VLAKAS");
}

let exam = 40;

switch(true){
    case exam > 95:
        console.log("good");
        break;
    case exam > 50:
        console.log("ok");
        break;
    default:
        console.log("EISAI VLAKAS");
}*/

/*let temp = 31;

if(temp > 0  && temp < 30){
    console.log("good");

}else{
    console.log("EISAI VLAKAS");
}

if(temp > 0  || temp < 30){
    console.log("good");

}else{
    console.log("EISAI VLAKAS");
}

let vlakas = true;

if(!vlakas){
    console.log("good");

}else{
    console.log("EISAI VLAKAS");
}*/

/*let usr = "";

while(usr == "" || usr == null){
    usr = window.prompt("name");
}

console.log(usr);*/ 

/*let usr;

do{
    usr = window.prompt("name");
}while(usr == "");

console.log(usr);*/

/*for(let i = 0; i<= 100; i++){
    if(i == 5){
        document.getElementById("cl").innerHTML += "<br>";

    }
    document.getElementById("cl").innerHTML += i;

}*/

/*let ppp;

ppp = lol(9);

function lol(j){
    let i;
    for(i = 0; i<=j; i++){
        console.log(i);
    }

    return i;
}
-
console.log("njjjjj");
console.log(ppp);*/

/*let agg = 1;

agg >= 18 ? console.log("adult") : console.log("kid");

console.log(`age ${agg}`);

let text = `age ${agg}`;

console.log(text);

//agg = agg.toLocaleString(undefined, {style: "percent"});
//agg = agg.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(agg);*/

/*let fruit = ["apple", "orange", "kiwi"];
let vegetables = ["onions", "carrots"];

fruit.push("lemon");
fruit.pop();
fruit.unshift("iojkl");
fruit.shift();

let lenn = fruit.length;
let ind = fruit.indexOf("apple");

console.log(ind);

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

fruit = fruit.sort();
fruit = fruit.sort().reverse();

for(let fr of fruit){
    console.log(fr);
}

let lst = [fruit, vegetables];

lst[0][1] = "not oranges";

for(let l of lst){
    for(let food of l){
        console.log(food);
    }
}*/

/*et num = [1,2,3,4];

console.log(...num);

let maxi = Math.max(...num);

console.log(maxi);

function sum(...numbers){
    let total = 0;

    for(let f of numbers){
        total += f;
    }
    return total;
}

console.log(sum(...num));*/

let std = ["fvkfr", "mfkr", "kfreklrlf"];

//std.forEach(capitalize); 

let s = std.map(capitalize);  //**************************** */

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(std);
console.log(s);

let ages = [18, 17, 11, 11];

let adults = ages.filter(check);

console.log(adults);

function check(element){
    return element >= 15;
}









