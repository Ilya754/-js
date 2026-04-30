"use strict";
// a ?? b || c вызывает ошибку приоритета. Нужно:
let a = null, b = 0, c = 42;
let res = a ?? (b || c);
alert(res); // 42 (b falsy, берётся c)