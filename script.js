//getting the input (or whats written) in the input box
const input_box = document.getElementById("input_box");
//getting whats in the list
const list_names = document.getElementById("order_list");

//onclick this funtion will run
function additem(){
    //compare the string and if nothing in the input box then give error msg
    if(input_box.value === ""){
        alert("You must add something to your list!!");
    }
    //else make it so it takes the input
    else{
        //taking the input for the list and displaying it
        let hold = document.createElement("li");
        hold.innerHTML = input_box.value;
        list_names.appendChild(hold);

        //making a sign to press to delete the item not needed
        let span = document.createElement("span");
        span.innerHTML = "\u0078";
        hold.appendChild(span);
    }
    //to clear the input box after a entry
    input_box.value = "";
    save();
}

//this is for the checked item and making the del button work
//what this is doing is checking if its in the list and if it is
//then it will mark it as check as in the css. It will then check if its 
//Span if it is then it will remove the parent which is the one added or clicked

function check_del(item){
    if(item.target.tagName === "LI"){
        item.target.classList.toggle("checked");
        save();
    }
    else if(item.target.tagName === "SPAN"){
        item.target.parentElement.remove();
        save();
    }
}

list_names.addEventListener("click", check_del ,false);

//so the webpage saves the entered data

function save(){
    localStorage.setItem("data", list_names.innerHTML);
}

//so the webpage loads all the saved data
function load(){
    list_names.innerHTML = localStorage.getItem("data")
}

load();
//end