
const taskInput = document.getElementById("taskInput")
const categorySelect = document.getElementById("categorySelect")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")
const themeBtn = document.getElementById("themeBtn")
const html = document.documentElement;


const form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault()

    // input ki value 
    const taskText=taskInput.value.trim();
    const category=categorySelect.value;

     if(taskText === "") {
    alert("Please enter a task!");
    return;
  }
  
  const editingId=taskInput.getAttribute("data-editing-id");
  if(editingId){
    const card = document.querySelector(
            `[data-id="${editingId}"]`);
    const title=card.querySelector(".task-title");
    title.textContent=taskText;
    const badge=card.querySelector(".category-badge");
    badge.textContent=category;

    taskInput.removeAttribute("data-editing-id");
  }else{
   createTaskCard(taskText, category)

  }

  
  taskInput.value = ""

})
function createTaskCard(taskText,category){
    const card=document.createElement("div");
    card.classList.add("task-card");

     card.setAttribute("data-id", Date.now())
    card.setAttribute("data-status", "pending")
    card.setAttribute("data-category", category)

    const cardTop=document.createElement("div");
    cardTop.classList.add("card-top");

    const title=document.createElement("h3");
    title.classList.add("task-title");

    const taskNode=document.createTextNode(taskText);
    title.appendChild(taskNode);

    const badge=document.createElement("span");
    badge.classList.add("category-badge");

    const categoryNode=document.createTextNode(category);
    badge.appendChild(categoryNode);

    cardTop.appendChild(title);
    cardTop.appendChild(badge);

      const cardButtons = document.createElement("div");
    cardButtons.classList.add("card-buttons");

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    const completeText = document.createTextNode("Complete");
    completeBtn.appendChild(completeText);

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    const editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    const deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);

    cardButtons.appendChild(completeBtn);
    cardButtons.appendChild(editBtn);
    cardButtons.appendChild(deleteBtn);

    // Card me add karo
    card.appendChild(cardTop);
    card.appendChild(cardButtons);

    // Task List me add karo
    taskList.appendChild(card);

}

taskList.addEventListener("click",function(e){
    if(e.target.classList.contains("deleteBtn")){
      const card=e.target.closest(".task-card");
      card.remove();
    }
    if(e.target.classList.contains("completeBtn")){
      const card=e.target.closest(".task-card");

      card.classList.toggle("completed");

      if(card.classList.contains("completed")){
        card.setAttribute("data-status","completed");
        e.target.textContent="Undo";
      }else{
           card.setAttribute("data-status", "pending")
        e.target.textContent = "Complete"
      }
    }

    if(e.target.classList.contains("editBtn")){
      const card=e.target.closest(".task-card");
      const title=card.querySelector(".task-title");
      const badge = card.querySelector(".category-badge");
      taskInput.value=title.textContent
        categorySelect.value = badge.textContent;
      taskInput.focus();

      taskInput.setAttribute("data-editing-id",card.getAttribute("data-id"));
      
    }
})
themeBtn.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "light") {
        html.removeAttribute("data-theme");
    } else {
        html.setAttribute("data-theme", "light");
    }
});

taskList.addEventListener("click", function() {
    console.log("🔴 TaskList — Bubble")
})

document.addEventListener("click", function() {
    console.log("⚪ Document — Bubble")
})

// Capturing
taskList.addEventListener("click", function() {
    console.log("🔴 TaskList — Capturing")
}, true)

document.addEventListener("click", function() {
    console.log("⚪ Document — Capturing")
}, true)


