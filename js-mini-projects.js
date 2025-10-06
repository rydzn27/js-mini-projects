// Live Character Counter
const text = document.querySelector("#text");
const chars = document.querySelector("#chars");

text.addEventListener("input", function() {
    chars.textContent = this.value.length;
});

//Simple Calculator
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");

const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract");
const mulBtn = document.querySelector("#multiply");
const divBtn = document.querySelector("#divide");
const clrBtn = document.querySelector("#clear");

const result = document.querySelector("#result");

addBtn.addEventListener("click", () => {
   if(input1.value === "" || input2.value === "") {
    result.textContent = "Please enter both numbers!";
    return;
   }

    let sum = Number(input1.value) + Number(input2.value);
    result.textContent = `${input1.value} + ${input2.value} = ${sum}`;
});

subBtn.addEventListener("click", () => {
   if(input1.value === "" || input2.value === "") {
    result.textContent = "Please enter both numbers!";
    return;
   }

    let diff = Number(input1.value) - Number(input2.value);
    result.textContent = `${input1.value} - ${input2.value} = ${diff}`;
});

mulBtn.addEventListener("click", () => {
    if(input1.value === "" || input2.value === "") {
    result.textContent = "Please enter both numbers!";
    return;
   }

    let prod = Number(input1.value) * Number(input2.value);
    result.textContent = `${input1.value} x ${input2.value} = ${prod}`;
});

divBtn.addEventListener("click", () => {
    if(input1.value === "" || input2.value === "") {
    result.textContent = "Please enter both numbers!";
    return;
   }
   
    if(input2.value == 0) {
        result.textContent = "Cannot divide by zero!";
        return;
    }

     if(input1.value == 0) {
        result.textContent = "Zero can't be divided!";
        return;
    }

    let quo = Number(input1.value) / Number(input2.value);
    result.textContent = `${input1.value} / ${input2.value} = ${Math.round(quo * 100) / 100}`;
});

clrBtn.addEventListener("click", () => {
    result.textContent = "";
    input1.value = "";
    input2.value = "";
});


// Dynamic Background Color Changer
const body = document.querySelector("body");
const r = document.querySelector("#r");
const g = document.querySelector("#g");
const b = document.querySelector("#b");
const reset = document.querySelector("#reset");

function updateColor() {
    body.style.backgroundColor = `rgb(${r.value || 0}, ${g.value || 0}, ${b.value || 0})`
}

r.addEventListener("input", updateColor);
g.addEventListener("input", updateColor);
b.addEventListener("input", updateColor);

reset.addEventListener("click", () => {
    r.value = "";
    g.value = "";
    b.value = "";
    body.style.backgroundColor = "white";
})

// Simple To-Do List
const task = document.querySelector("#task");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#tasklist") ;

function newTask() {
    if(task.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.textContent = "Delete";
    li.textContent = `${task.value} `;
    taskList.append(li);
    li.append(delBtn);

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    task.value = "";
    task.focus();
}
addTask.addEventListener("click", newTask);

task.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        newTask();
    }
});
