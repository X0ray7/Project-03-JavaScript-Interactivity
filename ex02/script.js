const titleElement = document.getElementById("title");
const boxElement = document.querySelector("#box");

// تغيير محتوى النص باستخدام textContent
titleElement.textContent = "Modified Live DOM Title";

boxElement.style.color = "darkblue";
boxElement.classList.add("active");