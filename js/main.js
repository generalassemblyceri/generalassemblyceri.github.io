// Use this for comments in JavaSctript code
// JavaSctript is CASE SENSITIVE. The second word is always capitalised e.g slideToggle
/* Or can also use this for comments in JavaSctript code. */
function askQuestions() {


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult.')
	}
	else if (userAge >= 13) {
		console.log('User is a teenager')
	}
	else {
		console.log('Self destruct in 10 seconds')
	}

	// .text changes whatever content of h2
	// Look at JQuery library api.jquery.com for all lists of things it can do
	$('h2').text('Hello ' + fullName);



	if (fullName.toLowerCase() == 'general assembly'){
		console.log(firstName);
			console.log('This is General Assembly')
	} else if (firstName == 'General' || firstName ==  'general') /*&& fullName == 'General' || 'general' + lastName)*/ {

		console.log(firstName);
		// (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly'){
		// This is a catch all as it converts all input to lower case and checks against the name
		alert('Hello ' + fullName)
	}

	var favColour = prompt('What is your favourite colour?');

	if (favColour == 'red' ||
		favColour == 'blue' ||
		favColour == 'green' ||
		favColour == 'yellow') {
		$('h1').css('color', favColour);
	}

}



// $ sign is just used instead of typing JQuery
// When the page has loaded ...
$(function() {

$('h1').on('click', askQuestions);
	// Hide all the content after h3 is used
	$('h3').next().hide();

	// When the user clicks an h3 ...
	$('h3').on('click', function() {
		// this is a pre-written piece of code.
		//The 'slideToggle' refers to the name of this code which makes the content after the clicked item dissapear by sliding away.
		//If use just 'toggle' then just disappears. The 2000 for slideToggle refers to 2 seconds (in miliseconds)
		$(this).next().slideToggle(2000);
		// If you were writing this yourself you would need: $(this).next().toggle(); and then the make reappear code.
		//Next code is asking to hide the next element. 'this' followed by 'next' means whichever h3 you click on the next element with disappear (hide) 
	});


});


