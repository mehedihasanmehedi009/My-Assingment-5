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
const data4 = {
  name: "Ambulance Service",
  number: 1994 - 999999,
  date: new Date().toLocaleTimeString(),
};

values.push(data4);
console.log(values);
document.getElementById("call-btn4").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data4.name}</h1>
              <p>${data4.number}</p>
             </div>
           </div>
           <div>${data4.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);

  alert(" 📞calling Ambulance    1994 - 999999...");
});
const data5 = {
  name: "Women & Child Helpline",
  number: 109,
  date: new Date().toLocaleTimeString(),
};

values.push(data5);
console.log(values);
document.getElementById("call-btn5").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data5.name}</h1>
              <p>${data5.number}</p>
             </div>
           </div>
           <div>${data5.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);

  alert(" 📞calling Women & Child Helpline   109...");
});

const data6 = {
  name: " Anti-Corruption Helpline",
  number: 106,
  date: new Date().toLocaleTimeString(),
};

values.push(data6);
console.log(values);
document.getElementById("call-btn6").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data6.name}</h1>
              <p>${data6.number}</p>
             </div>
           </div>
           <div>${data6.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);

  alert(" 📞calling  Anti-Corruption   106...");
});

const data7 = {
  name: "Electricity Helpline",
  number: 16216,
  date: new Date().toLocaleTimeString(),
};

values.push(data7);
console.log(values);
document.getElementById("call-btn7").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data7.name}</h1>
              <p>${data7.number}</p>
             </div>
           </div>
           <div>${data6.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);

  alert(" 📞calling  Electricity Outage  16216...");
});

const data8 = {
  name: " Brac Helpline",
  number: 16445,
  date: new Date().toLocaleTimeString(),
};

values.push(data8);
console.log(values);
document.getElementById("call-btn8").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data8.name}</h1>
              <p>${data8.number}</p>
             </div>
           </div>
           <div>${data8.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);

  alert(" 📞calling  Brac  16445 ...");
});

const data9 = {
  name: " Bangladesh Railway Helpline ",
  number: 163,
  date: new Date().toLocaleTimeString(),
};

values.push(data9);
console.log(values);
document.getElementById("call-btn9").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class=" mt-5 bg-slate-300 rounded-lg p-3 m-6 flex justify-between items-center">
            <div class="flex items-center">
             <div>
                 <h1  class="text-[16px]  font-bold" >${data9.name}</h1>
              <p>${data9.number}</p>
             </div>
           </div>
           <div>${data9.date}</div>
       </div>
      `;
  detlescontainer.appendChild(div);

  alert(" 📞calling Bangladesh Railway    163...");
});

document.getElementById("Clear-btn").addEventListener("click", function () {
  const detlescontainer = document.getElementById("detles-container");
  detlescontainer.innerHTML = "";
});
