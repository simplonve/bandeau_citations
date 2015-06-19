var lettersContainer = document.getElementById('mainText'),
				letters, 
				delay = 200,
				delayJump = 33,
				totalLetters;
			
			// Break to letters
			letterer( lettersContainer );
			// get all "letter" elements
			
			letters = lettersContainer.getElementsByTagName('letter');
			totalLetters = letters.length;
			
			for( var i=0; i < totalLetters; i++ ){
				doTimer(letters[i], delay);
				delay += delayJump;
				// if the letter is a "space" then pause for a little more, to have some delay between words 
				if( letters[i].innerHTML == ' ' )
					delay += delayJump * 3;
			}
			
			function doTimer(letter, delay){
				setTimeout(function(){ 
					letter.removeAttribute('class');
				}, delay);
			}
		</script>
var lettersContainer = document.getElementById('mainText'),
	letters, 
	delay = 200,
	delayJump = 33,
	totalLetters;

// Break to letters
letterer( lettersContainer );
// get all "letter" elements

letters = lettersContainer.getElementsByTagName('letter');
totalLetters = letters.length;

for( var i=0; i < totalLetters; i++ ){
	doTimer(letters[i], delay);
	delay += delayJump;
	// if the letter is a "space" then pause for a little more, to have some delay between words 
	if( letters[i].innerHTML == ' ' )
		delay += delayJump * 3;
}

function doTimer(letter, delay){
	setTimeout(function(){ 
		letter.removeAttribute('class');
	}, delay);
}