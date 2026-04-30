"use strict";
let config = { port: null };
let settings = { port: undefined };
let port = config.port ?? settings.port ?? 8080;
alert(`Итоговый порт: ${port}`);