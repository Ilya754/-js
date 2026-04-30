"use strict";
let user = { name: "Анна" };
user.age ??= 25;
alert(JSON.stringify(user)); // {name:"Анна",age:25}
user.age ??= 30;
alert(JSON.stringify(user)); // age не изменится, остался 25