var i = 0;
var txt = 'Writing, Literature &Publishing | Film Studies | Liberal Studies | Creative Writing';
var speed = 80;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  };
}