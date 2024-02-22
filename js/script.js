let input = document.querySelector(".container input")
let ul = document.querySelector(".listContainer")
let error = document.querySelector(".error")




function Todo(){
    if (input.value == "") {
        error.style.display  = "block" 
    }else{
        error.style.display  = "none" 
        let li = document.createElement("li")
        li.innerHTML = input.value
        ul.appendChild(li)
        let span = document.createElement("span")
        li.appendChild(span)
        let i = document.createElement("i")
        i.classList.add("fa-solid", "fa-trash")
        li.appendChild(i)
    }
    input.value = ""
    saveData()
}


ul.addEventListener("click", function(el){
    if(el.target.tagName == "LI"){
        let list = document.querySelector("li")
        list.classList.toggle("listItem")
        saveData()
    }else if(el.target.tagName == "SPAN"){
        let list = document.querySelector("li")
        list.classList.toggle("listItem")
        saveData()
    }else if(el.target.tagName == "I"){
        let list = document.querySelector("li")
        list.remove()
        saveData()
    }
})




function saveData(){
    localStorage.setItem("data", ul.innerHTML)
}

function show(){
    ul.innerHTML = localStorage.getItem("data")
}
show()