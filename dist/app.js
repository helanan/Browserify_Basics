(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("Hello Browserify JS");

let test = require('./test.js');
console.log("test", test);
console.log("test.happy", test.getHappy());


// let MathModule = require("./math");
// console.log("MathModule", MathModule );
// console.log("adding", MathModule.adding(3,5));


// ///// real stuff

// // let $ = require('jquery'),
// let lightside = require('./light'),
// darkside = require('./dark');




// // dom stuff
// let button = document.getElementById("btn-checkobject");
// button.addEventListener("click", introduceStarWars);

// let lightbtn = document.getElementById("btn-lightlist");
// lightbtn.addEventListener("click", lightside.getPlayer);

// let darkbtn = document.getElementById("btn-darklist");
// darkbtn.addEventListener("click", darkside.getEvil);

// let locbtn = document.getElementById("btn-getRLocation");
// locbtn.addEventListener("click", function(){
// 	lightside.getLocation("Count Dooku");
// });

// let obiDies = document.getElementById("btn-removeobiwan");
// obiDies.addEventListener("click", function(){
// 	//a jedi is removed by death or going to dark side
// 	lightside.removeJedi("Obi-Wan Kenobi");
// });

// let removeJedi = document.getElementById("btn-removeanakin");
// removeJedi.addEventListener("click", function(){
// 	console.log("this", this);
// 	//a jedi is removed by death or going to dark side
// 	lightside.removeJedi("Anakin Skywalker", "Darth Vader");
// });





// let addPlayer = document.getElementById("btn-signup");
// addPlayer.addEventListener("click", function(){
	
// 	var newPlayerName = document.getElementById("newperson").value;
// 	//which side
// 	var whichselected;
// 	var radios = document.getElementsByName('whichside');
// 	for (var i = 0, length = radios.length; i < length; i++) {
// 		// 1 = good, 2 = evil, 0 = jedi
// 	    if (radios[i].checked) {
// 	        whichselected = radios[i].value;
// 	        break;
// 	    }
// 	}
// 	console.log("whichselected", whichselected);
// 	if (Number(whichselected) === 0){
// 		lightside.addJedi(newPlayerName);
// 		console.log("new jedi list", lightside.getJedi());

// 	}else if (Number(whichselected) === 1){
// 		console.log("one");
// 		lightside.setPlayer(newPlayerName);
// 		console.log("new player list", lightside.getPlayer());
// 	}else if (Number(whichselected) === 2){
// 		darkside.setEvil(newPlayerName);
// 		console.log("new evil list", darkside.getEvil());
// 	}
// });




// function introduceStarWars() {
// 	console.log("StarWars Light", lightside, "and dark ", darkside);
// }
},{"./test.js":2}],2:[function(require,module,exports){
"use strict";

console.log("Hello Test JS");

let happy = true;
function getHappy(){
	return happy;
}

module.exports = {getHappy};
},{}]},{},[1]);
