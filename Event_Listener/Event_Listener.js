var firstButton = document.querySelectorAll("button")[0];
var secondButton = document.querySelectorAll("button")[1];

//addEventListener moddhe 2i ti parametter pass kora jabe first te hobe type of event and secend ta hobe funcion.
firstButton.addEventListener( /* this is type of event = */ "mouseover", /* this is anonymous function = */ function () {
    firstButton.innerHTML='Md.Amanullah';
    //firstButton.classList.add("my-style");
  }
);
firstButton.addEventListener( /* this is type of event = */ "mouseout", /* this is anonymous function = */ function () {
    firstButton.innerHTML= "Md.Amanullah Akon";
    //firstButton.classList.add("my-style");
  }
);


secondButton.addEventListener(
  /* this is type of event = */ "click",
  /* this is anonymous function = */ function () {
    var secondButtonText = this.innerHTML; //using button text.
    document.querySelector("p").innerHTML= secondButtonText +"." + " This is Second Button Text.";
    
    //secondButton.classList.add("my-style");
  }
);

//Event Listeners using with multiple elements start.

var buttonLength =  document.querySelectorAll(".myButton").length; // Amra jai button gulote ei (.myButton)class name ta use korchi tader sober length ta piye galem.
                                                                   //buttonLength variable er moddhe.
for (var i = 0; i <= buttonLength; i++)
{ //using for loop.
  document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
      var text = this.innerHTML;
      document.querySelector(".haddindTwo").innerHTML = text + " is clicked";
    });
};
/*
        document.querySelectorAll(".myButton")[0].addEventListener("click", function () {
             var text = this.innerHTML;
            document.querySelector(".haddindTwo").innerHTML=(text + " is clicked")
            });
        document.querySelectorAll(".myButton")[1].addEventListener("click", function () {
             var text = this.innerHTML;
             document.querySelector(".haddindTwo").innerHTML=(text + " is clicked")
            });
        document.querySelectorAll(".myButton")[2].addEventListener("click", function () {
             var text = this.innerHTML;
             document.querySelector(".haddindTwo").innerHTML=(text + " is clicked")
           }); 
*/
//Event Listeners using with multiple elements end.
