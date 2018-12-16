var modal = document.getElementById('myModal');

var btn = document.getElementById('myButton');

var span = document.getElementsByClassName("close")[0]; // clasa predefinita ca vector

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
   if(event.target == modal){
      modal.style.display = "none";
    }
}

var btncluj = document.getElementById('buttonCluj');

var cluj = document.getElementById("cluj");

var span1 = document.getElementsByClassName("close-photo")[0];

btncluj.onclick = function(){
  cluj.style.display= "block";
}

span1.onclick = function(){
  cluj.style.display = "none";
}

window.onclick = function(event){
   if(event.target == cluj){
      cluj.style.display = "none";
    }
}

var btnbrasov = document.getElementById('buttonBrasov');

var brasov = document.getElementById("brasov");

var span2 = document.getElementsByClassName("close-photo")[0];

btnbrasov.onclick = function(){
  brasov.style.display= "block";
}

span2.onclick = function(){
  brasov.style.display = "none";
}

window.onclick = function(event){
   if(event.target == brasov){
      brasov.style.display = "none";
    }
}

var btnbuc = document.getElementById('buttonBucharest');

var buc = document.getElementById("buc");

var span3 = document.getElementsByClassName("close-photo")[0];

btnbuc.onclick = function(){
  buc.style.display= "block";
}

span3.onclick = function(){
  buc.style.display = "none";
}

window.onclick = function(event){
   if(event.target == buc){
      buc.style.display = "none";
    }
}
