i = 0;
stepSize = 1;
stepStepSize = 1;
iSize = 10;
bigText = document.getElementById("bigtext");

colorIndex = 0;

colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"]

function increaseNumber() {
  bigText.innerHTML = i.toString();
  bigText.style.fontSize = iSize.toString() + "pt";
  bigText.style.color = colors[colorIndex];
  document.body.style.backgroundColor = colors[colorIndex + 1];
  
  colorIndex++;
  if (colorIndex == colors.length) {
    colorIndex = 0;
  }
  
  i += stepSize;
  stepSize += stepStepSize;
  iSize++;

}

function run() {
  setInterval(increaseNumber, 10);
}

setTimeout(run, 5000);