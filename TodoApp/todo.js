let c=0
document.getElementById("add").addEventListener("click", () => {
    let text=document.getElementById("newtask").value
    if(text===''){
        alert("This field can't be empty");
    }
    else{
        document.getElementById("newtask").value=''
        let list=document.createElement('li')
        list.setAttribute("style","color: white; ")
        list.setAttribute("id",`li${c}`)
        list.innerHTML=`<span id=tasktext>${text}</span> &nbsp <button id="done">✅</button>
                                <button id="delete" class="buttons">🗑️</button>`
        document.getElementById("pendingTasks").appendChild(list)
        saveData()
        c++
        
    }
})

document.getElementById("pendingTasks").addEventListener("click",(ev)=>{
    if(ev.target.getAttribute('id') === "done"){
        for(let childNode of ev.target.parentNode.childNodes){
            if(childNode.getAttribute('id') === 'tasktext'){
                childNode.classList.toggle('strike')
                saveData()
                break
            }
        }   
    }
    else if(ev.target.getAttribute('id') === "delete"){
        ev.target.parentNode.remove()
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data",document.getElementById("pendingTasks").innerHTML)
}
document.getElementById("pendingTasks").innerHTML=localStorage.getItem("data");