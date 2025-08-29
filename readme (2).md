questions : 6

1.questions:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:-ওয়েব ডেভেলপমেন্টে জাভাস্ক্রিপ্ট ব্যবহার করে HTML ডকুমেন্ট থেকে উপাদান (elements) খুঁজে বের করার জন্য এই চারটি পদ্ধতি ব্যবহৃত হয়। তাহলো ঃ

> getElementById এই পদ্ধতিটি একটি নির্দিষ্ট আইডি (ID) দিয়ে একটি উপাদান খুঁজে বের করে।

    এর সিনট্যাক্স (syntax) হলো: document.getElementById('myId')

> getElementsByClassName: এই পদ্ধতিটি নির্দিষ্ট শ্রেণী (class name) যুক্ত সব উপাদানগুলো একটি HTMLCollection হিসাবে রিটার্ন করে।

        এর সিনট্যাক্স হলো: document.getElementsByClassName('myClass')

> querySelector: এটি শুধুমাত্র নির্দিষ্ট নির্বাচকের সাথে মিলে যাওয়া প্রথম উপাদানটি রিটার্ন করে।

              এর সিনট্যাক্স: document.querySelector('#myId')

> querySelectorAll: এটি নির্দিষ্ট নির্বাচকের সাথে মিলে যাওয়া সব উপাদানগুলো একটি NodeList হিসাবে রিটার্ন করে।

           এর সিনট্যাক্স: document.querySelectorAll('.myClass')

2.questions:
How do you create and insert a new element into the DOM?

Answer:- JavaScript ব্যবহার করে একটি নতুন উপাদান (element) তৈরি এবং DOM-এ (Document Object Model) যুক্ত করার প্রধান ধাপগুলো নিচে বর্ণনা করা হলো:

১. প্রথমে আপনাকে document.createElement() পদ্ধতি ব্যবহার করে একটি নতুন উপাদান তৈরি করতে হবে।
এর সিনট্যাক্স:const newElement = document.createElement('div');

২. উপাদানটি তৈরি করার পর, আপনি এর মধ্যে টেক্সট (text), ক্লাস (class), আইডি (id) বা অন্যান্য অ্যাট্রিবিউট (attribute) যোগ করতে পারেন।
এর সিনট্যাক্স: newElement.id = 'my-id';
newElement.classList.add('my-class');
newElement.textContent = "mehedi hasan"

৩. এখন, আপনাকে তৈরি করা নতুন উপাদানটিকে বিদ্যমান DOM-এর কোনো একটি উপাদানের মধ্যে যুক্ত করতে হবে। এর জন্য বেশ কয়েকটি পদ্ধতি আছে: একটি দেখান হল
এর সিনট্যাক্স: const parentElement = document.querySelector('.container');
parentElement.appendChild(newElement);

3.questions:
What is Event Bubbling and how does it work?

Answer:- ইভেন্ট বাবলিং (Event Bubbling) হল জাভাস্ক্রিপ্টে ইভেন্ট প্রোপাগেশন (event propagation) মডেলের একটি অংশ। যখন ওয়েবপেজে একটি নেস্টেড (nested) বা চাইল্ড (child) উপাদানের উপর ক্লিক করেন, তবে ইভেন্ট বাবলিং প্রক্রিয়াটি শুরু হয়।

টার্গেট ফেজ (Target Phase): ইভেন্টটি প্রথমে সেই নির্দিষ্ট উপাদানে ট্রিগার হয়, যেটির উপর সরাসরি ক্লিক করা হয়েছে (বা কোনো ইভেন্ট ঘটেছে)। এটিই হলো টার্গেট এলিমেন্ট।

বাবলিং ফেজ (Bubbling Phase): এরপর, ইভেন্টটি টার্গেট উপাদান থেকে তার সরাসরি প্যারেন্ট, তারপর তার প্যারেন্ট এবং এভাবে DOM (Document Object Model) গাছের একদম উপরের উপাদান পর্যন্ত ছড়িয়ে পড়তে থাকে। এই প্রক্রিয়াটিকে "বাবলিং" বলা হয়, কারণ এটি জলের বুদবুদের মতো নীচ থেকে উপরে উঠে আসে।

4.questions:
What is Event Delegation in JavaScript? Why is it useful?

Answer:- ইভেন্ট ডেলিগেশন (Event Delegation) হলো জাভাস্ক্রিপ্টে একটি প্রোগ্রামিং কৌশল, যেখানে আপনি অনেকগুলো চাইল্ড উপাদানের উপর পৃথক ইভেন্ট লিসনার
যুক্ত না করে, শুধুমাত্র তাদের প্যারেন্ট উপাদানের উপর একটি একক ইভেন্ট লিসনার যুক্ত করেন। এটি ইভেন্ট বাবলিং ধারণার উপর ভিত্তি করে কাজ করে। যখন কোনো চাইল্ড উপাদানে একটি ইভেন্ট ঘটে, তখন সেই ইভেন্টটি বাবলিং প্রক্রিয়ার মাধ্যমে তার প্যারেন্ট উপাদান পর্যন্ত পৌঁছায় এবং প্যারেন্ট উপাদানের লিসনারটি সেটিকে ধরে ফেলে।

5.questions:
What is the difference between preventDefault() and stopPropagation() methods?

Answer:- preventDefault() এবং stopPropagation() এই দুটি জাভাস্ক্রিপ্ট পদ্ধতি ইভেন্ট হ্যান্ডলিংয়ের (event handling) ক্ষেত্রে খুবই গুরুত্বপূর্ণ, কিন্তু এদের কাজ সম্পূর্ণ ভিন্ন। সহজ কথায়, preventDefault() ইভেন্টের ডিফল্ট আচরণ (default behavior) বন্ধ করে দেয়, আর stopPropagation() ইভেন্টের বিস্তার (propagation) বন্ধ করে দেয়
