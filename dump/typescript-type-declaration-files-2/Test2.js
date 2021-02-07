"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var myLib_1 = __importDefault(require("./myLib"));
var result = myLib_1.default.makeGreeting("Matthew");
console.log("The computed greeting is:" + result);
var count = myLib_1.default.numberOfGreetings;
console.log(count + " greetings have been made");
