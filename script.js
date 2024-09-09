const questions = [
  {
    ques: "What is a data structure?",
    a: "A programming language",
    b: "A collection of algorithms",
    c: "A way to store and organize data",
    d: "A type of computer hardware",
    correct: "c",
  },
  {
    ques: "What is the time complexity of binary search in a sorted array?",
    a: "O(n)",
    b: " O(log n)",
    c: "O(n log n)",
    d: "O(n^2)",
    correct: "b",
  },
  {
    ques: "Which sorting algorithm is based on the divide-and-conquer technique?",
    a: "Bubble Sort",
    b: "Quick Sort",
    c: "Insertion Sort",
    d: "Selection Sort",
    correct: "b",
  }, {
    ques: "Which data structure uses LIFO (Last In First Out) order?",
    a: "Stack",
    b: "Linked List",
    c: "Queue",
    d: "Tree",
    correct: "a",
  }, {
    ques: "What does the <a> tag in HTML define?",
    a: "Image",
    b: "Table",
    c: "Hyperlink",
    d: "Paragraph",
    correct: "c",
  }, {
    ques: "Which CSS property is used to change the text color of an element?",
    a: "font-color",
    b: "text-color",
    c: "color",
    d: "background-color",
    correct: "c",
  }, {
    ques: "What is the default value of the position property in CSS?",
    a: "static",
    b: "relative",
    c: "absolute",
    d: "fixed",
    correct: "a",
  }, {
    ques: "Which CSS property controls the space between lines of text?",
    a: "letter-spacing",
    b: " line-height",
    c: "word-spacing",
    d: "text-indent",
    correct: "b",
  }, {
    ques: "Which method is used to remove the last element from an array in JavaScript?",
    a: "shift()",
    b: "pop()",
    c: "slice()",
    d: "splice()",
    correct: "b",
  }, {
    ques: "What is the output of console.log(typeof null) in JavaScript?",
    a: "object",
    b: "null",
    c: "number",
    d: "undefined",
    correct: "a",
  },
];
let index = 0;
let total = questions.length;
let wrong = 0;
let right = 0;
const quesline = document.getElementById("ques");
const op = document.querySelectorAll(".options");
function loadques() {
  if (index === total) {
    endquiz();
  }
  reset();
  const data = questions[index];
  quesline.innerText = `${index + 1} ) ${data.ques}`;
  op[0].nextElementSibling.innerText = data.a;
  op[1].nextElementSibling.innerText = data.b;
  op[2].nextElementSibling.innerText = data.c;
  op[3].nextElementSibling.innerText = data.d;
}

function submitquiz() {
  const data = questions[index];
  const ans = getAns();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadques();
}

function getAns() {
  let answer = 0;
  op.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
}

function reset() {
  op.forEach((input) => {
    input.checked = false;
  });
}

function endquiz() {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h1>Thank you for playing the quiz</h1>
    <h2>Your Score is ${right}/ ${total}</h2>
    </div>
    `;
}

loadques();

