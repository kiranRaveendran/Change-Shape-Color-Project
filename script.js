// Array of colors
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A5", "#FF8C33", "#A833FF", "#33FFD7", "#FFC733", "#C733FF", "#33FF83"];
// Array of shapes
const shapes = ["circle", "square", "triangle", "rectangle", "diamond"];

// Change color function
function changeColor() {
  const shapeElement = document.getElementById("shape");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  shapeElement.style.backgroundColor = randomColor;
}

// Change shape function
function changeShape() {
  const shapeElement = document.getElementById("shape");
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  
  // Reset styles
  shapeElement.className = "shape"; 

  // Apply the new shape class
  shapeElement.classList.add(randomShape);
}

// Shape Styles using JS
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .circle { border-radius: 50%; }
    .square { width: 100px; height: 100px; }
    .triangle { width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid #333; }
    .rectangle { width: 120px; height: 60px; }
    .diamond { width: 0; height: 0; border: 50px solid transparent; border-bottom-color: #333; position: relative; top: -25px; }
    .diamond:after { content: ""; position: absolute; left: -50px; top: 50px; width: 0; height: 0; border: 50px solid transparent; border-top-color: #333; }
  `;
  document.head.appendChild(style);
});
