let inputs = document.getElementById("inputs");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newList = document.createElement("ul");
        newList.innerHTML=`${inputs.value} <i class="fa-solid fa-trash-can" style="color: #ec2222;"></i>`;
        text.appendChild(newList);
        inputs.value="";
        newList.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newList.remove()
        }
    }
}
