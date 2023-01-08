function handleStart(e) {
//   e.target.style.backgroundColor = "lightpink";
  e.target.style.fontSize = '50px';
}

function handleEnd(e) {
//   e.target.style.backgroundColor = "lightgreen";
  e.target.style.fontSize = '20px';
  let _x = e.clientX;
  let _y = e.clientY;
  e.target.style.left = _x + "px";
  e.target.style.top = _y + "px";
  e.target.style.position = "absolute"; //Necessary
}

// function handleDragEnter(e) {
//     e.target.style.backgroundColor = 'orangered';
//   }

let element = document.getElementById("box");

element.addEventListener("dragstart", handleStart);
// element.addEventListener("dragenter", handleDragEnter);

element.addEventListener("dragend", handleEnd);
