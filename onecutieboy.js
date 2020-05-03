// TEXT ANIMATION
let isBubbleAnimationRunning = true;

const TEXT_OPTIONS = [
  "I'm tired", "I miss you", "I feel cold", "Everything's kinda boring",
  "Am I important?", "These days are rough", "I've slept so little",
  "I'm overthinking", "Something's wrong", "I feel so restless",
  "Kinda hangry", "Bummed out", "Do you still need me?", 
  "The bus didn't come", "The test was hard", "Feeling anxious",
  "Not feeling confident", "Wanna cuddle?", "Did you like my joke?",
  "Watched West World?", "Wish you were here", "Feeling lost",
  "Miss my cats", "Missing my friends", "Wanna hug you", 
  "Estressed out"
];

function chooseText() {
  const choosenText = sample(TEXT_OPTIONS);
  const textSVG = document.getElementById("text");
  textSVG.innerHTML = choosenText;
}
chooseText();

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const bubble = document.querySelector('.speak-bubble');

bubble.addEventListener("animationstart", () => {
  isBubbleAnimationRunning = true;
}, false);
bubble.addEventListener("animationend", () => {
  isBubbleAnimationRunning = false;
  restartBubble();
}, false);

function restartBubble() {
  chooseText();
  bubble.classList.remove("run-bubble-animation");
  void bubble.offsetHeight;

  setTimeout(() => {
    bubble.classList.add("run-bubble-animation");
  }, 5000)
}
//KISS ANIMATION
class KissShape extends mojs.CustomShape {
  getShape() {
    return '<use xlink:href="#kiss" />'
  }
}

mojs.addShape('kiss', KissShape);

const OPTS = {
  fill: 'none',
  radius: 35,
  strokeWidth: {
    50: 0
  },
  scale: {
    0: 1
  },
  angle: {
    'rand(0, -90)': 0
  },
  duration: 500,
  left: 0,
  top: 0,
  easing: 'cubic.out'
};

const kiss1 = new mojs.Shape({
  ...OPTS,
  shape: 'kiss',
  fill: '#922724',
});

const kiss2 = new mojs.Shape({
  ...OPTS,
  shape: 'kiss',
  radius: {
    0: 15
  },
  angle: {
    0: 'rand(0,-90)'
  },
  strokeWidth: {
    30: 0
  },
  stroke: '#ce2029',
  delay: 'rand(75, 150)'
});

document.addEventListener('click', function (e) {
  kiss2
    .tune({
      x: e.pageX,
      y: e.pageY
    })
    .replay();

  kiss1
    .tune({
      x: e.pageX,
      y: e.pageY
    })
    .replay();

});