var quotes = [
'Create an annual holiday for someone you appreciate and spend the whole day surprising them.',
'Send a postcard to a sick child through <a href="http://www.SendKidstheWorld.com" target="_blank">Send Kids the World</a>.',
'Make someone a playlist with all the #1 Billboard Hits from their birthday week for each year that they have been alive.',
'Take flowers to the nurse station at the hospital.',
'Start an email address for someone you love and send it emails with nice memories you have shared. Give them the password in the future.',
'Sit in a public wifi spot with a laptop and put up a small sign offering to help with someone\'s resume.',
'<a href="https://www.happyhooligans.ca/homemade-giant-bubbles" target="_blank">Learn how to make big bubbles</a> and delight passersby.',
'If you are persuasive: Offer to help a local nonprofit make 5 calls to drum up donations or food for meetings.',
'Set up a listening booth with just a table and a sign that says, \'Tell me about it\'.',
'Walk dogs for those who can\'t in the UK: <a href="http://www.cinnamon.org.uk" target="_blank"> www.cinnamon.org.uk</a>.',
'Match up with an LGBTQ pen pal within the American prison system: <a href="http://www.blackandpink.org" target="_blank">blackandpink.org</a>.',
'Draw pictures of cute orangutans and place them on products in the grocery store with palm oil in them <a href="http://www.saynotopalmoil.com/Whats_the_issue.php" target="_blank">(Learn more here)</a>.',
'Turn compost at a community garden.',
'Use a bottle to reduce the water your toilet wastes <a href="https://www.good.is/articles/do-it-yourself-use-a-bottle-to-reduce-the-water-your-toilet-wastes-30daysofgood" target="_blank"><i>(Learn more here)</i></a>.',
'Leave free laundry detergent at the laundromat.',
'Take hot cocoa packets with the little marshmallows to soup kitchens.',
'Make care packages for homeless people that have dry shampoo, shoe glue and a flashlight.',
'Gift a homeless person massage gel inserts for their shoes.',
'Buy a stranger\'s dinner at a restaurant without telling them.',
'Bring inexpensive toys on planes to give to children seated by you.',
'Loan an entrepreneur money on <a href="http://www.Kiva.com" target="_blank">Kiva.com</a>.',
'Read a book out loud and record a public domain audio book through <a href="http://www.Librivox.com" target="_blank"> Librivox.com</a>.',
'Leave change in a vending machine for someone else to use.',
'Microvolunteer by doing small tasks online on <a href="skillsforchange.com" target="_blank">skillsforchange.com</a>.',
'Buy a book through <a href="http://www.betterworldbooks.com" target="_blank">betterworldbooks.com</a>.',
'Sponsor a landmine - detecting rat through <a href="https://www.apopo.org/en/adopt" target="_blank">apopo.org</a>.',
'Make a friend a custom t-shirt with an inside joke on it on <a href="http://www.zazzle.com" target="_blank">zazzle.com</a>.',
'Pay someone\'s parking ticket anonymously.',
'Write a note to a close friend\'s mom something nice about their child or how they raised them.',
'Call your mom or other family member and thank her for something she taught you.',
]

function newIdea() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('ideaDisplay').innerHTML = quotes[randomNumber];
}
