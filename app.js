const task = document.getElementById("task")
const addTaskBtn = document.getElementById("add-task-btn")
const tasks = document.getElementById("tasks")

let tasksList = []

addTaskBtn.addEventListener("click", () => {
    // Primirea unei valori din Input si salvarea ei intrun tablue cu push
   if (task.value != "") {
        let taskValue = task.value
        tasksList.push(taskValue)
        task.value = ""
        showTasksList()
   }
})

// Afisam lista de taskuri
function showTasksList () {
    tasks.innerHTML = ""
    tasksList.forEach((t, idx) => {
        tasks.innerHTML += `
        <li data-idx="${idx}">
            <span>${t}</span>
            <button class="delete-task">
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>`

    })
    addTaskDelete()
    addTaskComplete()
}

// Stergerea unui task

function addTaskDelete () {
    const deleteTaskBtns = document.querySelectorAll(".delete-task")
    deleteTaskBtns.forEach(btn => btn.addEventListener("click", () =>{
         let idx = +btn.parentElement.getAttribute("data-idx")
         tasksList.splice(idx, 1)
         showTasksList()
    }))
}
function addTaskComplete() {
    const taskItems = tasks.querySelectorAll("li")
    taskItems.forEach(t => t.addEventListener("click", () =>{
        t.classList.toggle("completed")
    }))
}
