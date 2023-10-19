const input = document.querySelector(".writehere");
const list = document.querySelector(".list");

display();

function addItem(){
if(input.value == ""){
    alert("Please add any errand in the input box :)")
}else{
    const createListItem = document.createElement("li");
    createListItem.innerHTML = input.value;
    const newItem = list.appendChild(createListItem);
    newItem;
    input.value = "";
    const createRemoveButton = document.createElement("img");
    createRemoveButton.setAttribute("src","assets/square-x.png");
    createRemoveButton.setAttribute("width","20px");
    createRemoveButton.classList.add("removeButton");
    newItem.appendChild(createRemoveButton);
    newItem.addEventListener("click",()=> {
        list.appendChild(createListItem).classList.toggle("done")
      })
 
}
save();
}
document.addEventListener("click",(e)=>{
    if(e.target.className == "removeButton"){
    e.target.parentElement.remove();
    }
    save();
})


document.addEventListener("keypress",()=>{
   
    document.querySelector(".writehere").focus()
})
function save(){
    localStorage.setItem("task" , list.innerHTML);
}
function display(){
    list.innerHTML = localStorage.getItem("task");
}