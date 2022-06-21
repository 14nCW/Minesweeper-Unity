/*jshint globalstrict: true, devel: true, browser:true, esversion: 6*/
"use strict";

// let klucz = "/.1q/3AdBU2y_PBmAmev]U&zWbc_MRw_\Zx4C";
let klucz = ".4XQYFCxRV^rTv6!NGF7).fX7+tDRV9vR:*4V5Ax";

function getHideAbstract(li, button) {
  return function () {
    let div = li.lastElementChild;
    div.remove();
    button.textContent = "Pokaż odpowiedź";
    button.onclick = getShowAbstract(li);
  };
}

function getShowAbstract(li) {
  return function () {
    if (document.getElementById("klucz").value == klucz) {
      let abstract = li.firstElementChild.title;
      let div = document.createElement("div");
      div.className = "divWygrana";
      div.textContent = abstract;

      let button = li.lastElementChild;
  
      button.textContent = "Ukryj odpowiedź";
      button.onclick = getHideAbstract(li, button);
  
      li.append(div);
    }
  };
}



function setup() {
  let lis = document.querySelectorAll("ul[id]>li");
  lis.forEach((li) => {
    let button = document.createElement("button");
    button.textContent = "Sprawdź odpowiedź";
    button.onclick = getShowAbstract(li);
    li.append(button);
  });
}


document.addEventListener("DOMContentLoaded", setup);
