//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

function moreContent() {
	var pElem = document.getElementById("more");
	pElem.innerHTML = bacon;
}


//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/

function lessContent(){
	var hideLink = document.getElementById("less");
	hideLink.style.display = "none";
}

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

function zoom(){
	var increaseSize = document.getElementById("biggie");
	var hoverOver = increaseSize.addEventListener("mouseover", mouseOver);
	var hoverOut = increaseSize.addEventListener("mouseout", mouseOut);
	function mouseOver() {
		increaseSize.style.fontSize = "150%";
	}
	function mouseOut() {
		increaseSize.style.fontSize = "100%";
	}
}

//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var menuItems = ["Filet O Fish", "Oreo McFlurry", "Egg McMuffin"];

function valueMenu() {
	// console.log("test");
	var menuElem = document.getElementById("menu");
	for (var i=0; i<menuItems.length; i++){
		menuElem.innerHTML = menuItems;
	}
}

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 30px after clicking on the text.*/

function redFace() {
	var drinkElem = document.getElementById("drink");
	drinkElem.style.color = "red";
	drinkElem.style.fontSize = "30px";
}

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

function showPrice() {
	var oreoElem = document.getElementById("oreo");
	var priceElem = document.getElementById("price");
	var hoverOver = oreoElem.addEventListener("mouseover", mouseOver);
	var hoverOut = oreoElem.addEventListener("mouseout", mouseOut);
	function mouseOver() {
		priceElem.innerHTML = "$5.55";
	}
	function mouseOut() {
		priceElem.innerHTML = "";
	}
}

//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";
var buttonElem = document.getElementById("Benjamin");
buttonElem.addEventListener("click", function() {
	document.getElementById("displayQuote").innerHTML = myQuote;
});

//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

var randomElem = document.getElementById("random");
randomElem.addEventListener("click", randomize);

function randomize() {
	// console.log("random test");
	// console.log(quotes);
	// console.log(Math.floor((Math.random()*4)+1))
	var randomQuote = document.getElementById("displayQuotes");
	randomQuote.innerHTML = quotes[Math.floor((Math.random()*4))];
}

//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/

var revealElem = document.getElementById("showHide");
revealElem.addEventListener("click", reveal);

function reveal() {
	var moneyPic = document.getElementById("showmoney");
	if (moneyPic.style.display === "none") {
		moneyPic.style.display = "block";
	}else{
		moneyPic.style.display = "none";
	}

}

