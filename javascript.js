var quotes = [
'Create a holiday for someone you appreciate and send them a card',
'Send a postcard to a sick child through sendkidstheworld',
'Make someone a CD with all the #1 Billboard Hits on their birthday week',
'Take flowers to the nursing (firefighting/police) station to say thank you',
'Start an email address for someone you love and send it emails with your favourite photos/some thoughts'
]

function newIdea() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('ideaDisplay').innerHTML = quotes[randomNumber];
}