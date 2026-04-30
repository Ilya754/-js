"use strict";
let isLoggedIn = true;
isLoggedIn &&= false;
alert(isLoggedIn); // false

isLoggedIn = false;
isLoggedIn &&= false;
alert(isLoggedIn); // false (false — falsy, присваивание не сработало)