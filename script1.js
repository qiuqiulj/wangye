function solveQuadratic() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("roots").innerHTML = "根1: " + root1 + "<br>根2: " + root2;
  } else if (discriminant === 0) {
    var root = -b / (2 * a);
    document.getElementById("roots").innerHTML = "根: " + root;
  } else {
    document.getElementById("roots").innerHTML = "没有实根.";
  }
}

function toggleDetails() {
  var details = document.getElementById("details");
  // 切换子列表的最大高度，从0到自适应高度或从自适应高度到0
  if (details.style.maxHeight) {
    details.style.maxHeight = null;
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
  }
}