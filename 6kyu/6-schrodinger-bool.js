// https://www.codewars.com/kata/schrodingers-boolean/train/javascript

"use strict";

const Omnibool = function () {
    this.magical = false;
};

const omnibool = new Omnibool();//this variable needs your wizard magic!

Omnibool.prototype.valueOf = function () {
    this.magical = !this.magical
    return this.magical;
}.bind(omnibool)