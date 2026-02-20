/* 
TODO:
1- make it that when the user clicks on popup background. the popup disappears
2- make the popup form functional(when the user submits. the data turn to an object inside an array)
3- display all objects inside the array in <div class="content"> using the placeholder as a blueprint


*/
let htmlBody = document.querySelector("body")
let addBtn = document.querySelector(".add")
let creatingForm = document.querySelector("#popup-background")

htmlBody.addEventListener("click", (e)=> {
    let attributeClass = e.target.id;

    if (attributeClass == "add")
    {
        creatingForm.classList.toggle("hidden")
    }
    else if (attributeClass == "popup-background") {
        e.target.classList.toggle("hidden")        
    }
    else if (attributeClass == "delete-box") {
        // TODO delete the corresponding book from array
    }
    else if (attributeClass == "close-popup") {
        e.target.closest("#popup-background").classList.toggle("hidden")
    }
})
htmlBody.addEventListener("mouseover", (e)=> {
    const book = e.target.closest("#placeholder-book")
    if (!book) return;
    book.querySelector(".book-overlay").classList.remove("hidden");
})
htmlBody.addEventListener("mouseout", (e)=> {
    const book = e.target.closest("#placeholder-book")
    if (!book) return;
    book.querySelector(".book-overlay").classList.add("hidden")
})