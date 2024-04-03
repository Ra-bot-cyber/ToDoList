const list = document.querySelector(".list");
const text = document.getElementById("text");
const addBtn = document.querySelector(".add");
let delBtn = document.getElementsByTagName("span");
let items = document.getElementsByTagName("li");
const refresh = () => {
  for (let index = 0; index < delBtn.length; index++) {
    delBtn[index].addEventListener("click", (event) => {
      console.log(event.target.parentElement);
      event.target.parentElement.remove();
    });
  }
};

refresh();
console.log(delBtn);
addBtn.addEventListener("click", () => {
  const el = text.value;
  if (el != "") {
    console.log(text.value);
    const para = document.createElement("li");
    const newText = document.createElement("p");
    newText.innerText = el;
    list.appendChild(para);

    const newBtn = document.createElement("span");

    newBtn.innerText = " Del";
    para.appendChild(newText);
    para.appendChild(newBtn);
    text.value = "";
    refresh();
  } else {
    alert("Enter a task!");
  }
});
//delBtn.forEach();
console.log(delBtn[0]);
//
