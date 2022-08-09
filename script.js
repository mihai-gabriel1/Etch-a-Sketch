function buildGrid(x, y, cellSize, gridElement) {
  gridElement.style.display = "grid";
  gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement("div");
    square.className = "square";
    squares.appendChild(square);
    square.addEventListener("mouseover", function () {
      square.classList.add("active");
    });
  }

  gridElement.appendChild(squares);
}

buildGrid(30, 30, 20, document.querySelector(".grid"));

function refreshPage() {
  window.location.reload();
}
