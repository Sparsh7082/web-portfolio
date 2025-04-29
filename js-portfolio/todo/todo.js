function addTask(){
    let input = document.getElementById("taskInput")
    let taskText = input.value.trim()
    
    
    if(taskText === ""){
       alert("please enter a task")
       return
    }
    
    
    let li = document.createElement("li")
    li.innerText = taskText
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "del"
    deleteBtn.onclick = function(){
       li.remove()
    }
    
    
    li.appendChild(deleteBtn)
    
    
    document.getElementById("tasklist").appendChild(li)
    input.value = ''
}
