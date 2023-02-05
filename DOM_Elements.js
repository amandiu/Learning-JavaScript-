//Document Object model(Dom)
//34,35 tutorial again dekte hobe and kj korte hobe
//getElementById
//getElementsByTagName
//getElementsByClassName

document.getElementById("aman").innerHTML = "This is Headding."; //getElementById
document.getElementById("aman1").innerHTML = "I am not a good student"; //getElementById
document.getElementsByTagName("p")[1].innerHTML = "Hi Sugandha.😊"; //getElementsByTagName
document.getElementsByClassName("had4")[0].innerHTML = "That's a fun.😛"; //getElementsByClassName
document.getElementsByClassName("smile")[0].innerHTML = "Obviously.!! This is my mind.😊"; //getElementsByClassName

//Downwards-querySellector / querySellectorAll

document.querySelector(".students_list").children[0].innerHTML=("Md.Amanullah");// how to use children Element.

document.querySelector(".students_list").querySelector(".student_b").innerHTML=("Md.Sagor Alom");

document.querySelector(".student_c").innerHTML=("Sagor Alom");

//how to use ParentElements

//document.querySelector("li").parentElement.innerHTML=("");

// using querySellectorAll 
document.querySelectorAll("li")[2]; //Three number li (student) information selector are working.
document.querySelectorAll("li")[2].previousElementSibling.innerHTML=("Md.Shimul Ahamed");//This means select the second number and Change its value;
