var lettersContainer = document.getElementById('mainText'),
	letters, 
	delay = 200,
	delayJump = 33,
	totalLetters;

letterer( lettersContainer );

letters = lettersContainer.getElementsByTagName('letter');
totalLetters = letters.length;

for( var i=0; i < totalLetters; i++ ){
	doTimer(letters[i], delay);
	delay += delayJump;
	if( letters[i].innerHTML == ' ' )
		delay += delayJump * 3;
}

function doTimer(letter, delay){
	setTimeout(function(){ 
		letter.removeAttribute('class');
	}, delay);
}