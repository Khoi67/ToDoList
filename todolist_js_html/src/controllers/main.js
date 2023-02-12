var taskList = new TaskList();
var validation = new Validation();


function getEle(id) {
    return document.getElementById(id);
}

function getItem(task) {
    var taskName = getEle("newTask").value;

    var task = new Task(Math.random(), taskName, "todo");
    return task;
}
function renderItem(data) {
    var contentHTML = "";

    data.forEach(function (task) {
        contentHTML += `  
            <li>
                <span>${task.taskName}</span>
                <div class="buttons">
                    <button class="remove" onclick="removeTask('${task.id}')">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                    <button class="complete" onclick="" >
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
            </li>
            `;
    });

    getEle("todo").innerHTML = contentHTML;
}

getLocalStorage();

getEle("addItem").addEventListener("click", function () {
    var item = getItem();

    taskList.addTask(item)
    renderItem(taskList.arr);

    setLocalStorage();
})

/**
 * Delete Task
 */
function removeTask(task){
    taskList.deleteTask(task);
    renderItem(taskList.arr);
    setLocalStorage();
}

/**
 * Luu DSNV
 */
function setLocalStorage() {
    //convert data JSON => String
    var dataString = JSON.stringify(taskList.arr);
    localStorage.setItem("TASK", dataString);
}

/**
 * Lấy data từ LocalStorage
 */
function getLocalStorage() {
    var dataString = localStorage.getItem("TASK");
    //convert string => JSON
    taskList.arr = JSON.parse(dataString);
    //render tbody
    renderItem(taskList.arr);
}


