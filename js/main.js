document.getElementsByClassName("class01")[0].style.backgroundColor = "red";

const newH1 = document.createElement("h1");

newH1.textContent = "something ";

document.getElementById("divId1").appendChild(newH1);


const anotherNewH1 = document.createElement("h1");

anotherNewH1.textContent = "more text";
console.log(anotherNewH1);

document.getElementById("divId2").appendChild(anotherNewH1);

function rock() {
  const change = document.getElementById("change");
  // if (change.src === "img/penguin.jpg") {
    change.src = "img/thepig.jpg";
    change.alt = "new new";
  // }
}

// }else {
//   change.src = "img/penguin.jpg";}
// }
