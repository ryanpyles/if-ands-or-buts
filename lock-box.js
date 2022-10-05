// JavaScript Document

const prompt = require('prompt-sync')
({sigint: true});

let enterPin = String(prompt('Please enter 4 digit PIN'));

let pinCode = '1234';

if(enterPin !== '1234' ){
	console.log('Access Denied!');
} else{
	console.log('Access Granted!');
};


