var imgArray = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
];
var imgTag = document.querySelector("img");

var counter = 0;


function next() {
  counter++;
  if (counter >= imgArray.length) {
    counter = 0;
    imgTag.src = imgArray[counter];
  } else {
    imgTag.src = imgArray[counter];
  }
}
function prev() {
    counter--;
    if(counter<0)
    {
        counter = imgArray.length-1; 
        imgTag.src = imgArray[counter]      
    }
    else {
        imgTag.src = imgArray[counter];
      }
}