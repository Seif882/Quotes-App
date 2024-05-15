var qoute = document.getElementById("qoute");
var saidBy = document.getElementById("saidBy");
var btn = document.getElementById("btn");
var rand = Math.round(Math.random() * 10);

var qoutesArr = [
  {
    qoute: `“Be yourself; everyone else is already taken.”`,
    author: `-- Oscar Wilde`,
  },
  {
    qoute: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    author: `-- Robert Frost`,
  },
  {
    qoute: `“So many books, so little time.”`,
    author: `-- Frank Zappa`,
  },
  {
    qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: `-- Albert Einstei`,
  },
  {
    qoute: `“A room without books is like a body without a soul.”`,
    author: `-- Marcus Tullius Cicero`,
  },
  {
    qoute: `
    “If you tell the truth, you don't have to remember anything.”`,
    author: `-- Mark Twain`,
  },
  {
    qoute: `“A friend is someone who knows all about you and still loves you.”`,
    author: `-- Elbert Hubbard`,
  },
  {
    qoute: `
    “To live is the rarest thing in the world. Most people exist, that is all.”`,
    author: `-- Oscar Wilde`,
  },
  {
    qoute: `“Be the change that you wish to see in the world.”`,
    author: `-- Mahatma Gandhi`,
  },
  {
    qoute: `“You only live once, but if you do it right, once is enough.”`,
    author: `-- Mae West`,
  },
];

btn.onclick = function () {
  qoute.innerHTML = qoutesArr[rand].qoute;
  saidBy.innerHTML = qoutesArr[rand].author;

  var temp = Math.round(Math.random() * 10);
  do {
    temp = Math.round(Math.random() * 10);
  } while (temp === rand);
  rand = temp;
};
