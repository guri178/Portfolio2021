function hamburger() {
    document.getElementById('line1').classList.toggle('line-visual-click1');
    document.getElementById('line2').classList.toggle('line-visual-click2');
    document.getElementById('line3').classList.toggle('line-visual-click3');
    document.getElementById('nav').classList.toggle('in-nav');
  }
  document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
  } );