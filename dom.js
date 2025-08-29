const values = [];
// loves-Button-function

function lovesButton(id) {
  const loveButtons = document.getElementById(id);
  loveButtons.addEventListener("click", function (e) {
    e.preventDefault;
    const loveNumber = document.getElementById("hard-number");
    const loveNumberStr = loveNumber.innerText;
    let loves = parseInt(loveNumberStr);
    loves++;
    loveNumber.innerText = loves;
  });
}

lovesButton("hard-btn1");
lovesButton("hard-btn2");
lovesButton("hard-btn3");
lovesButton("hard-btn4");
lovesButton("hard-btn5");
lovesButton("hard-btn6");
lovesButton("hard-btn7");
lovesButton("hard-btn8");
lovesButton("hard-btn9");

// calling- section

// copy-section-function
const copyButtons1 = document.getElementById("copy-Button1");
copyButtons1.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("National Emergency Number: 9999");
});

const copyButtons2 = document.getElementById("copy-Button2");
copyButtons2.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Police Helpline Number: 9999");
});
const copyButtons3 = document.getElementById("copy-Button3");
copyButtons3.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Fire Service Number: 999");
});
const copyButtons4 = document.getElementById("copy-Button4");
copyButtons4.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Ambulance Service: 1994-999999");
});
const copyButtons5 = document.getElementById("copy-Button5");
copyButtons5.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Women & Child Helpline:190");
});
const copyButtons6 = document.getElementById("copy-Button6");
copyButtons6.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Anti-Corruption Helpline: 160");
});
const copyButtons7 = document.getElementById("copy-Button7");
copyButtons7.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Electricity Helpline: 16216");
});
const copyButtons8 = document.getElementById("copy-Button8");
copyButtons8.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Brac Helpline: 16445");
});
const copyButtons9 = document.getElementById("copy-Button9");
copyButtons9.addEventListener("click", function (e) {
  e.preventDefault;
  const copyNumber = document.getElementById("copy");
  const copyNumberStr = copyNumber.innerText;
  let copy = parseInt(copyNumberStr);
  copy++;
  copyNumber.innerText = copy;
  alert("Bangladesh Railway Helpline:163");
});

// call-section
// function getElement(id) {
//   const element = document.getElementById(id);
//   return element;
// }

const data1 = {
  name: "National Emergency Number",
  number: 999,
  date: new Date().toLocaleTimeString(),
};
values.push(data1);
console.log(values);

document.getElementById("call-btn1").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 m-6 rounded-lg p-3 flex justify-between items-center"> 
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data1.name}</h1>
              <p>${data1.number}</p>
             </div>
           </div>
           <div>${data1.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);
  alert("📞calling National Emergency 999... ");
});

const data2 = {
  name: "Police Helpline Number",
  number: 999,
  date: new Date().toLocaleTimeString(),
};
values.push(data2);
console.log(values);
document.getElementById("call-btn2").addEventListener("click", function (e) {
  e.preventDefault;
  const detlescontainer = document.getElementById("detles-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data2.name}</h1>
              <p>${data2.number}</p>
             </div>
           </div>
           <div>${data2.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);
  alert("📞calling Police 999...");
});

const data3 = {
  name: "Fire Service Number",
  number: 999,
  date: new Date().toLocaleTimeString(),
};

values.push(data3);
console.log(values);
document.getElementById("call-btn3").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data3.name}</h1>
              <p>${data3.number}</p>
             </div>
           </div>
           <div>${data3.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);
  alert(" 📞calling Fire Service  999...");
});

document.getElementById("Clear-btn").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");
  detlescontainer.innerHTML = "";
});
