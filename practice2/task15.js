"use strict";
let count = 0;
count ||= 10;
alert(`count = ${count} (0 — falsy, поэтому присвоилось 10)`);