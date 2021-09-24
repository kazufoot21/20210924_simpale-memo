const onClickAdd = () => {
  const textAdd = document.getElementById("add-text");

  const text = textAdd.value;

  textAdd.value = " ";

  const li = document.createElement("li");

  const div = document.createElement("div");

  const p = document.createElement("p");
  p.innerText = text;

  const button = document.createElement("button");
  button.textContent = "delete";

  button.addEventListener("click", () => {
    const deletetarget = button.closest("li");
    document.getElementById("memo-list").removeChild(deletetarget);
  });
  div.appendChild(p);
  div.appendChild(button);

  li.appendChild(div);

  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
