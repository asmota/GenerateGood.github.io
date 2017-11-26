var quotes = [
'Create an annual holiday for someone you appreciate and spend the whole day surprising them',
'Send a postcard to a sick child through SendKidstheWorld.com',
'Make someone a playlist with all the #1 Billboard Hits from their birthday week for each year that they have been alive',
'Take flowers to the nurse station at the hospital',
'Start an email address for someone you love and send it emails with nice memories you have shared. Give them the password in the future',
'Sit in a public wifi spot with a laptop and put up a small sign offering to help with someone\’s resume',
'Learn how to make big bubbles (https://happyhooligans.ca/homemade-giant-bubbles) and delight passersby',
'If you are persuasive: Offer to help a local nonprofit make 5 calls to drum up donations or food for meetings',
'Set up a listening booth with just a table and a sign that says, \'Tell me about it\'',
'Walk dogs for those who can\'t in the UK: http://www.cinnamon.org.uk/',
'Match up with an LGBTQ pen pal within the American prison system: blackandpink.org',
'Draw pictures of cute orangutans and place them on products in the grocery store with palm oil in them saynotopalmoil.com/Whats_the_issue.php',
'Turn compost at a community garden',
'Use a bottle to reduce the water your toilet wastes good.is/articles/do-it-yourself-use-a-bottle-to-reduce-the-water-your-toilet-wastes-30daysofgood',
'Leave free laundry detergent at the laundromat',
'Take hot cocoa packets with the little marshmallows to soup kitchens',
'Make care packages for homeless people that have dry shampoo, shoe glue and a flashlight',
'Gift a homeless person massage gel inserts for their shoes',
'Buy a stranger\'s dinner at a restaurant without telling them',
'Bring inexpensive toys on planes to give to children seated by you',
'Loan an entrepreneur money on Kiva.com',
'Read a book out loud and record a public domain audio book through Librivox.com',
'Leave change in a vending machine for someone else to use',
'Microvolunteer by doing small tasks online on skillsforchange.com',
'Buy a book through betterworldbooks.com',
'Sponsor a landmine - detecting rat through apopo.com',
'Make a friend a custom t-shirt with an inside joke on it on zazzle.com',
'Pay someone\'s parking ticket anonymously',
'Write a note to a close friend\'s mom something nice about their child or how they raised them',
'Call your mom and thank her for something she taught you',
]

function newIdea() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('ideaDisplay').innerHTML = quotes[randomNumber];
}
