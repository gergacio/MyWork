const count = document.querySelector("#count");

incrementVisitorCounter();

function incrementVisitorCounter(){
 let visits;
 if(!localStorage.getItem("visits")){
    localStorage.setItem("visits",1);
 }
 visits = +localStorage.getItem("visits");
 const incrementedValue = visits + 1;
 localStorage.setItem("visits", incrementedValue);
 count.innerText = localStorage.getItem("visits");
}
