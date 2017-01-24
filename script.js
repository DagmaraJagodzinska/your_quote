//jquery
var url ="http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?"; // api
var $button = $('.trigger');
var $paragraph = $('#jokeParagraph'); 
var $paragraphAuthor = $('#jokeAuthor');

//window.onload = createQuote();  // kiedy otworzymy strone bedzie juz cytat

function createQuote(input){
	$paragraphAuthor.text("Author: " + input.quoteAuthor);
	$paragraph.text(input.quoteText);
}
function getQuote() {
	$.getJSON(url, createQuote); // link do API- adres zapytania, createQuote - funkcja do wykonania 
}

$(document).ready(function() {  //funkcja generująca cytat
	getQuote();
	$button.click(function() {
		getQuote();
	})
});

// input.quoteAuthor.length zwróci wartość 0 w przypadku, gdy autor cytatu będzie pusty - Javascript interpretuje zerową długość jako po prostu false.
// Wykrzyknik na początku (!input.quoteAuthor.length) zaneguje wartość fałszu i zrobi z niej prawdę, czyli jeśli autor cytatu jest pusty, to wejdziemy do treści warunku.