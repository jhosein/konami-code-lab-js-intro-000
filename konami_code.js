const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

  document.body.addEventListener('keydown', keydownHandler(event));
function init() {
  // your code here
  var index = 0;

}

function keydownHandler(e) {
  let key = e.key;
  console.log(key);

  if(e.key === codes[index]) {
    index++;
    if(index === codes.length)
    {
      alert("Hurray!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
