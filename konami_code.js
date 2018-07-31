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

function init() {
  // your code here

  let index = 0;
  document.body.addEventListener('keydown', keyDown(event));

  keyDown(e){
    let key = e.key;
    console.log(key);
    console.log(index);

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
}
