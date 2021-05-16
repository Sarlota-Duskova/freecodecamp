const projectName = "random-quote-machine";
let quotesData;
var currentQuote = '',
    currentAuthor = '';

var colors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590"
];

var staticUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

$(document).ready(function() {
  clickMe();
})

function clickMe(){

// jQuery because of $
$.getJSON(staticUrl, function(data) {
quotesData = data.quotes[Math.floor(Math.random() * data.quotes.length)];
  console.log(quotesData);
currentQuote = quotesData.quote;
  console.log(currentQuote);
currentAuthor = quotesData.author;
  console.log(currentAuthor);
}); 
    
      var color = Math.floor(Math.random() * colors.length);
  
  $("body").css({
  backgroundColor: colors[color],
  color: colors[color]
});

  $(".button").css({
  backgroundColor: colors[color]
});
  
  $("#tumblr-quote, #tweet-quote").css({
  color: colors[color]
});
    
  $("#text").text(currentQuote);
  $("#author").text(currentAuthor);

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );
}

$('#new-quote').on('load', clickMe()); 

