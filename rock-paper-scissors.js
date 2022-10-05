const prompt = require('prompt-sync')
({sigint: true});

let user1Choice = String(prompt('CFirst user choose either "rock", "paper" or "scissors":  '));
console.log(user1Choice);
let user2Choice = String(prompt('Chose either rock, paper or scissors:  '));
console.log(user2Choice);
if((user1Choice === 'rock' && user2Choice === 'scissors') || (user1Choice === 'paper' && user2Choice === 'rock') || (user1Choice === 'scissors' && user2Choice === 'paper')){
	console.log('User 1 wins');
} else if(user1Choice === user2Choice){
	
	console.log('draw, pick again');
} else {
	console.log('user 2 wins');
}