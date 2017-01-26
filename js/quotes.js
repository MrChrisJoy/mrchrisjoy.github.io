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
  },
  {
    text: "Peace is its own reward.",
    author: "Mahatma Gandhi"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw"
  },
  {
    text: "Look deep into nature, and then you will understand everything better.",
    author: "Albert Einstein"
  },
  {
    text: "Joy in looking and comprehending is nature's most beautiful gift.",
    author: "Albert Einstein"
  },
  {
    text: "The difference between stupidity and genius is that genius has its limits.",
    author: "Albert Einstein"
  },
  {
    text: "Education is what remains after one has forgotten what one has learned in school.",
    author: "Albert Einstein"
  },
  {
    text: "It has become appallingly obvious that our technology has exceeded our humanity.",
    author: "Albert Einstein"
  },
  {
    text: "The only source of knowledge is experience.",
    author: "Albert Einstein"
  },
  {
    text: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein"
  },
  {
    text: "You don't learn to walk by following rules. You learn by doing, and by falling over.",
    author: "Richard Branson"
  },
  {
    text: "A good leader doesn't get stuck behind a desk.",
    author: "Richard Branson"
  },
  {
    text: "Business opportunities are like buses, there's always another one coming.",
    author: "Richard Branson"
  },
  {
    text: "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
    author: "Elon Musk"
  },
  {
    text: "Work hard, stay positive, and get up early. It's the best part of the day.",
    author: "George Allen, Sr."
  }
];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerHTML =
  '<p>&ldquo;<e style="font-style:italic;">' + quote.text + '</e>&rdquo; <br><e style="font-weight: 900;font-color:black;float:right;">' + quote.author + '</e> </p>';
})();


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
