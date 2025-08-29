//  hard-section

document.getElementsById("hard-btn").addEventListener("click", function () {
  document.getElementById("hard-number");
});

// document
//   .getElementById()
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const Amounts = parseInt(document.getElementById("").value);
//     const balance = parseInt(document.getElementById("Balance").innerText);
//     if (Amounts <= 0 || Amounts > balance) {
//       alert("invalid number");
//       return;
//     }
//     const total = balance - Amounts;
//     setInnerText(total);
// -
//     const data = {
//       name: "Cash Out",
//       date: new Date().toLocaleTimeString(),
//     };
//     DateTime.push(data);
//     console.log(DateTime);
//   });

// document
//   .getElementById("TransacTions-button")
//   .addEventListener("click", function () {
//     const TransacTionsContainer = document.getElementById(
//       "TransacTions-container"
//     );
//     TransacTionsContainer.innerText = "";
//     for (const data of DateTime) {
//       const div = document.createElement("div");
//       div.innerHTML = `
//       <div class=" mt-5 bg-white rounded-lg p-3 flex justify-between items-center">
//             <div class="flex items-center">
//               <div class="rounded-full bg-slate-100 p-3 mr-2">
//                      <img class="mx-auto" src="./img/send1.png" alt="" />
//               </div>
//              <div>
//                  <h1  class="text-[16px]  font-bold" >${data.name}</h1>
//               <p>${data.date}</p>
//              </div>
//            </div>
//            <i class="fa-solid fa-ellipsis-vertical"></i>
//        </div>

//       `;
//       TransacTionsContainer.appendChild(div);
//     }
//   });

// এই ফাংশনটি হার্ট বাটনে ক্লিক করলে সংখ্যা বাড়াবে
function increaseHeartCount(event) {
  // ইভেন্ট টার্গেট থেকে ক্লিক করা বাটনটি খুঁজে বের করা
  const clickedButton = event.target;

  // বাটনের ঠিক আগের HTML উপাদানটি (স্প্যান ট্যাগ) খুঁজে বের করা
  const heartCountSpan =
    clickedButton.previousElementSibling.querySelector(".heart-count");

  // বর্তমান হার্ট সংখ্যাটি নেওয়া
  let currentCount = parseInt(heartCountSpan.textContent, 10);

  // সংখ্যা ১ করে বাড়ানো
  currentCount++;

  // নতুন সংখ্যাটি স্প্যান ট্যাগে সেট করা
  heartCountSpan.textContent = currentCount;
}

// ডকুমেন্টের সব হার্ট বাটন খুঁজে বের করা
const heartButtons = document.querySelectorAll("heart-button");

// প্রতিটি বাটনে ক্লিক ইভেন্ট লিসেনার যোগ করা
heartButtons.forEach((button) => {
  button.addEventListener("click", increaseHeartCount);
});
