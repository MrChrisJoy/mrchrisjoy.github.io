(function() {
var quotes = [
  {
    text: "I would like to die on Mars. Just not on impact.",
    author: "Elon Musk"
  },
  {
    text: "Great companies are built on great products.",
    author: "Elon Musk"
  },
  {
    text: "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    text: "The true sign of intelligence is not knowledge but imagination.",
    author: "Albert Einstein"
  },
  {
    text: "No man has a good enough memory to be a successful liar.",
    author: "Abraham Lincoln"
  },
  {
    text: "You cannot escape the responsibility of tomorrow by evading it today.",
    author: "Abraham Lincoln"
  }
];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerHTML =
  '<p>&ldquo;<e style="font-style:italic;">' + quote.text + '</e>&rdquo; <e style="font-weight: 900; font-color: black;">' + quote.author + '</e> </p>';
})();