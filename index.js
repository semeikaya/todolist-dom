const button1 = document.querySelector("#button1");
const ul = document.querySelector("#list");
const input = document.querySelector("#input");

button1.addEventListener("click", () => {
    if (input.value === "") {
        alert("Необходимо ввести текст");
    } else {
        const li = document.createElement("li");
        const del = document.createElement("input");
        const complete = document.createElement("input");
        li.textContent = input.value;
        li.className = "marker";
        li.style.color = "white";
        del.type = "button";
        del.style.fontSize = "20px";
        del.style.borderRadius = "50%";
        del.style.border = "solid red";
        del.style.backgroundColor = "red";
        del.style.color = "white";
        del.style.width = "30px";
        del.style.height = "30px";
        del.style.textAlign = "center";
        complete.type = "checkbox";
        complete.style.width = "5%";

        li.prepend(complete);
        li.append(del);
        ul.prepend(li);

        input.value = "";

        del.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
        complete.addEventListener("click", (e) => {
            li.style.textDecoration = "line-through";
        });
    }
});
