for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".button1")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);

      switch (text) {
        case "Audio1":
          var audio = new Audio("Sounds/Amon chena cinbe loke.mp3");
          audio.play();
          break;

        case "Audio2":
          var audio = new Audio("Sounds/Buker jomano batha.mp3");
          audio.play();
          break;

        case "Audio3":
          var audio = new Audio("Sounds/Tumay dekle mone hoy.mp3");
          audio.play();
          break;
      }
    });
}
function myButton1(){
  document.querySelector(".myBio").innerHTML = ("This is my bio..");
}
function sazzad(){
  document.querySelector("#sazzadImg").src=("image/Sazzad.jpg");
}