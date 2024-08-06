const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

console.log(taskContainer)

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
     if(e.key == "Enter"){
        addTask()
     }
})
function addTask(){
    if (inputBox.value == ""){
        alert("You must write something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
       
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        taskContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData()
}
function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML)
}

taskContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() == "LI"){
        e.target.classList.toggle("check")
        saveData()
    }
    else if(e.target.tagName.toUpperCase() == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})



function showTask(){
    taskContainer.innerHTML= localStorage.getItem("data")
}

showTask()