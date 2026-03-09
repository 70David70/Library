let htmlBody = document.querySelector("body")
let addBtn = document.querySelector(".add")
let creatingForm = document.querySelector("#popupBackground")

htmlBody.addEventListener("click", (e)=> {
    let attributeClass = e.target.id;

    if (attributeClass == "add")
    {
        creatingForm.classList.toggle("hidden")
    }
    else if (attributeClass == "popupBackground") {
        e.target.classList.toggle("hidden")        
    }
    else if (e.target.classList.contains("delete-book")) {
        // TODO delete the corresponding book from array
        let bookIndex = e.target.closest(".box").id
        books.splice(bookIndex, 1);
        render()
    }
    else if (attributeClass == "closePopup") {
        e.target.closest("#popupBackground").classList.toggle("hidden")
    }
})

htmlBody.addEventListener("mouseover", (e)=> {
    const book = e.target.closest(".box")
    if (!book) return;
    book.querySelector(".book-overlay").classList.remove("hidden");
})
htmlBody.addEventListener("mouseout", (e)=> {
    const book = e.target.closest(".box")
    if (!book) return;
    book.querySelector(".book-overlay").classList.add("hidden")
})

let books = [];

function Book(title, author, readStatus, pageNumber, pagesCompleted, bookPicture) {
    this.title = title,
    this.author = author,
    this.readStatus = readStatus,
    this.pageNumber = pageNumber,
    this.pagesCompleted = pagesCompleted,
    this.bookPicture = bookPicture
}

let inputForm = document.querySelector("#newBox")

inputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = e.target.elements
    
    let title = input.getBoxName.value
    let author = input.getBoxAuthor.value
    let readStatus = input.isCompleted.checked
    let pageNumber = input.getBoxPagecount.value
    let pagesCompleted = 0
    let bookPicture = input.uploadPic.value
    books.push(new Book(title, author, readStatus, pageNumber, pagesCompleted, bookPicture))
    console.log(books);
    render()
})

// render time
function render() {
    let contentArea = document.querySelector(".content")
    contentArea.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
       let book = books[i];
       let card = document.createElement("div");
       card.innerHTML = `
        <div class="box" id="${i}">
                    <div class="book-overlay hidden">
                        <div class="delete-book">X</div>
                    </div>
                    <img class="book-image" src="${book.bookPicture}"></img>
                    <div class="book=info">
                        <div class="book-names">
                            <h4>${book.title}</h4>
                            <h6>by ${book.author}</h6>
                        </div>
                        <div class="book-progress">
                            <progress value="${book.pagesCompleted}" max="${book.pageNumber}"></progress>
                            <div class="book-pages">
                                <input type="number" value="${book.pagesCompleted}">
                                <p>/</p>
                                <input type="number" value="${book.pageNumber}">
                                <p>pages read</p>
                            </div>
                            <div>
                                <button>-1</button>
                                <button>+1</button>
                            </div>
                        </div>
                    </div>

                </div>
       `
       contentArea.appendChild(card)
    }
}
render()