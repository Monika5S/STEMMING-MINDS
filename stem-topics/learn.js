// function to display a random fact selcted from facts object based on the topic.
function findFacts(subject) {
  let pos = Math.floor(Math.random() * 4);
  displayFacts(facts[subject][pos]);
}

// display fact related to topic
function displayFacts(newfact) {
  let fact = document.querySelector("#newfact");
  fact.innerHTML = newfact;
}

// refrencing resources based on topic selected by user
function setResources(subject) {
  let articles = document.querySelector("#articles");
  let courses = document.querySelector("#courses");

  articles.href = resources[subject].article_link;
  courses.href = resources[subject].course_link;
}

// object to store resources link on stem topics
var resources = {
  maths: {
    article_link: "https://www.freecodecamp.org/news/tag/mathematics/",
    course_link: "https://www.khanacademy.org/math",
  },

  science: {
    article_link: "https://www.freecodecamp.org/news/tag/science",
    course_link: "https://www.khanacademy.org/science ",
  },

  computer: {
    article_link: "https://www.freecodecamp.org/news/tag/computer-science/",
    course_link: "https://www.khanacademy.org/computing/computer-programming",
  },

  data: {
    article_link: "https://www.freecodecamp.org/news/tag/data-science/",
    course_link: "https://www.khanacademy.org/math/statistics-probability",
  },
};

// object for storing facts
var facts = {
  maths: [
    `Did you know the constant Pi is just not 3.142 alone, instead, there is no end to it? <br /> Here is Pi written to 100 decimal places… 3.1415 926535 897932 384626 43383 27950 28841 97169 39937 51058 20974 94459 23078 16406 28620 89986 280348 253421 17067 982148 08651 32823...`,
    `Pythagoras, the famous Greek mathematician had used little rocks to represent numbers, when working out mathematical equations? Hence, the name Calculus was born, which in Greek means pebbles`,
    `If there are 50 students in a class then it is a certainty that at least wo will share the same birthday`,
    `Are you aware of the magic of the number nine? <br/>You can multiply any number with nine [9], and then total all the individual digits of the result to make it into a single digit.<br /> Have you noticed that the sum of all these individual digits would always be nine`,
  ],
  science: [
    `It takes a photon around 40,000 years to cover the distance from the core of the sun to its surface; but it takes only 8 minutes to make its way from there to Earth.`,
    `Imagine if you knew how many teaspoonful of water there is in the Atlantic Ocean, there is 8 times the number of atoms in a teaspoonful of water than the teaspoonfuls of water in the Atlantic!`,
    `Helium is a superfluid at its lowest temperature. <br/> When Helium is cooled to its absolute zero, i.e. -460°F or -273°C, it possesses surprising properties- it flows against gravity and starts running up and over the brim of a glass container!`,
    `The Great Barrier Reef is the largest living structure on Earth - At over 2000 kilometers long`,
  ],
  computer: [
    `90% of the world's data was created in the last two-three years.`,
    `The first webcam was invented at the University of Cambridge to monitor the coffee pot in the computer science department`,
    `The first-ever computer had a weight of over 27 Tons`,
    `The term “bug” became ubiquitous in computer technology after a moth triggered the Mark II computer to malfunction`,
  ],
  data: [
    `Data Science now drives more than 90% of the bidding for large companies' digital marketing spend on Adwords, Facebook and Amazon. <br /> Agencies such as NeuralEdge (Adwords) and Adverio (Amazon Ads) use Data Science to calculate optimal ad bids`,
    `AI-powered bees are being developed by the Wyss Institute in Boston to be used in crop pollination, climate monitoring, and surveillance, among other things`,
    `Companies that make use of customer analytics are 23 times more likely to outperform their competitors in customer acquisition (nine times for retention), according to McKinsey`,
    `Sentiment analysis is a useful tool for reputation management, too. Solutions like Brand24 scan what people are saying about your brand online as well as the sentiment behind their comments. That way, if you have a negative review, you can be proactive and do some damage control before it escalates`,
  ],
};

let subject_heading = document.querySelector("#subject");
let subject = localStorage.getItem("subject_name");
subject_heading.innerHTML = subject.toUpperCase();
findFacts(subject);
setResources(subject);
