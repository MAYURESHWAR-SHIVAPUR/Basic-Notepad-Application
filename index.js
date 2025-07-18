const input = document.getElementById("input");
const submit = document.getElementById("submit");
const todo_list = document.getElementsByClassName("todo_list")[0];

submit.addEventListener('click', () => {
    const inputData = input.value;
    if (!inputData) {
        return
    }
    input.value = "";

    //Create list
    const todo_item = document.createElement('div');
    todo_item.classList.add("todo_item");


    //one
    const one = document.createElement('div');
    one.classList.add("one");

    const input_2 = document.createElement('input');
    input_2.classList.add("input_2");
    input_2.setAttribute('readonly', 'true')
    input_2.value = inputData;


    //two
    const two = document.createElement('div');
    two.classList.add("two");

    const pen = document.createElement("i");
    pen.classList.add("fa-regular", "fa-pen-to-square");

    const check = document.createElement("i");
    check.classList.add("fa-regular", "fa-circle-check");

    const trash = document.createElement("i");
    trash.classList.add("fa-regular", "fa-trash-can");

    pen.addEventListener("click", () => {
        const isNowEditable = !input_2.toggleAttribute("readonly");
        if (isNowEditable) {
            input_2.focus();
        }
    });


    check.addEventListener("click", () => {
        input_2.style.textDecoration =
            input_2.style.textDecoration === "line-through" ? "none" : "line-through";
    });


    trash.addEventListener("click", () => {
        todo_item.remove();
    })

    two.append(check, pen, trash);

    one.appendChild(input_2);
    todo_item.append(one, two);
    todo_list.appendChild(todo_item);



});