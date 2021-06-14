let flipBody = document.querySelectorAll(".flip__body");

let snake = document.createElement("img");
snake.setAttribute("src", "snake.png");
snake.classList.add("flip__back");

let dollar = document.createElement("img");
dollar.setAttribute("src", "dollar.png");
dollar.classList.add("flip__back");

let a = flipBody[0];
let b = flipBody[1];
let c = flipBody[2];
let d = flipBody[3];
let e = flipBody[4];

let xx = 0;
let knopka = document.querySelector(".knopka");
knopka.onclick = () => {
  console.log("najata");
  console.log("xx=1");
  return (xx = 1);
};
console.log("xx=" + xx);

let sbros = document.querySelector(".sbros");
sbros.onclick = () => {
  console.log("sbros");
  return (xx = 0);
};

a.onclick = () => {
  x = Math.round(Math.random() * 4);
  console.log(x);
  if (xx == 1) {
    a.appendChild(dollar);
  } else {
    if (x == 0) {
      a.appendChild(dollar);
      console.log("a=dollar");
    }
    if (x == 1) {
      b.appendChild(dollar);
      console.log("b=dollar");
    }
    if (x == 2) {
      c.appendChild(dollar);
      console.log("c=dollar");
    }
    if (x == 3) {
      d.appendChild(dollar);
      console.log("d=dollar");
    }
    if (x == 4) {
      e.appendChild(dollar);
      console.log("e=dollar");
    }
  }

  a.style.transform = "rotateY(-180deg)";
  b.style.transform = "rotateY(-180deg)";
  c.style.transform = "rotateY(-180deg)";
  d.style.transform = "rotateY(-180deg)";
  e.style.transform = "rotateY(-180deg)";
};

b.onclick = () => {
  a.style.transform = "rotateY(-180deg)";
  a.appendChild(dollar);
  b.style.transform = "rotateY(-180deg)";
  c.style.transform = "rotateY(-180deg)";
  d.style.transform = "rotateY(-180deg)";
  e.style.transform = "rotateY(-180deg)";
};

c.onclick = () => {
  a.style.transform = "rotateY(-180deg)";
  b.style.transform = "rotateY(-180deg)";
  c.style.transform = "rotateY(-180deg)";
  d.style.transform = "rotateY(-180deg)";
  d.appendChild(dollar);
  e.style.transform = "rotateY(-180deg)";
};

d.onclick = () => {
  a.style.transform = "rotateY(-180deg)";
  b.style.transform = "rotateY(-180deg)";
  c.style.transform = "rotateY(-180deg)";
  d.style.transform = "rotateY(-180deg)";

  e.style.transform = "rotateY(-180deg)";
  e.appendChild(dollar);
};

e.onclick = () => {
  a.style.transform = "rotateY(-180deg)";
  b.style.transform = "rotateY(-180deg)";
  c.style.transform = "rotateY(-180deg)";
  c.appendChild(dollar);
  d.style.transform = "rotateY(-180deg)";
  e.style.transform = "rotateY(-180deg)";
};

// for (let i = 0; i < flipBody.length; i++) {
//   const element = flipBody[i];
//   element.onclick = () => {
//     element.appendChild(snake);
//     element.style.transform = "rotateY(-180deg)";
//   };
//   setTimeout(f2, 5000);
// }

// function f2() {
//   for (let i = 0; i < flipBody.length; i++) {
//     const element = flipBody[i];
//     element.style.transform = "rotateY(-180deg)";
//     element.appendChild(dollar);
//     console.log("AAAAAAAAAAAA");
//   }
// }

// if (element.onclick) {
//   element.appendChild(snake);
// } else {
//   element.appendChild(dollar);
// }

// {
//   const element = flipBody[i];

//   element.onclick = f1;
//   function f1() {
//     element.style.transform = "rotateY(-180deg)";
//     element.appendChild(snake);
//     function f2() {
//       for (let i = 0; i < flipBody.length; i++) {
//         const element = flipBody[i];
//         element.style.transform = "rotateY(-180deg)";
//         console.log("AAAAAAAAAAAA");
//       }
//     }
//     setTimeout(f2, 1500);
//   }
// }

// let atr = document.querySelector(".atr");
// // atr.setAttribute("src", "snake.png");
// console.log(atr.getAttribute("src"));

// let b = document.querySelector(".b");

// let a = document.createElement("img");
// console.log(a);
// a.setAttribute("src", "snake.png");
// console.log(a);
// b.appendChild(a);
