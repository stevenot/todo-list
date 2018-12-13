// This is a pure Javascript implementation of the code along Todo List Web App developed by Colt Steele.
// jQuery is used in the original code.

var list = document.getElementById("inputText");
var listItems = document.querySelectorAll("li");
var itemToDelete = document.querySelectorAll("span");

var input = document.getElementById("inputText");


input.addEventListener("keypress", function(key){
        
    addNewItem(key.keyCode);

});

function addNewItem(key){
    var keyValue = key;
    if(keyValue === 13) {
        var getText = document.getElementById("inputText");
        console.log(getText.value);
        if(getText.value !== "") {
            var createListItem = document.createElement("li");
            var createListItemText = document.createTextNode(getText.value);
            createListItem.innerHTML = "<span><i class=\"fas fa-trash-alt\"></i></span>";
            addEventCompleted(createListItem);   
            addEventDelete(createListItem.firstChild);
            createListItem.appendChild(createListItemText);
            document.getElementsByTagName("ul")[0].appendChild(createListItem);
            getText.value = "";
            }
        
        }
}   

// loop through each list element to add an event listener that will toggle the css code to mark completion
listItems.forEach(function(li){
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    })
});

// loop through each span element to add the functionality to delete a list item
itemToDelete.forEach(function(item){
    item.addEventListener("click", function(){
        deleteListItem(item);
    })
});


// function to delete the parent li 
function deleteListItem(element){
    element.parentNode.remove("li"); 
}

// add complete event dynamically
function addEventCompleted(item){
    item.addEventListener("click", function(){
        item.classList.toggle("completed");
    });
}

// add delete event dynanically
function addEventDelete(item) {
    item.addEventListener("click", function(){
        item.parentNode.remove("li");
    });
}
