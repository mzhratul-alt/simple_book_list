/*
1) Select Dom Element
2) Add Event Listener
3)Basic Validation
4) Create Element
5) Append Element for UI Display
*/

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const book_list = document.querySelector('#book-list')

btn.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (title.value == "" || author.value == "" || year.value == "") {
        alert("Input can't empty.")
    } else {
        //Create Row
        var newRow = document.createElement('tr')

        //Create New Title
        var newTitle = document.createElement('td')
        newTitle.innerHTML = title.value

        var test = newRow.appendChild(newTitle)

        //Create New Author
        var newAuthor = document.createElement('td')
        newAuthor.innerHTML = author.value

        var test = newRow.appendChild(newAuthor)

        //Create New Year
        var newYear = document.createElement('td')
        newYear.innerHTML = year.value

        var test = newRow.appendChild(newYear)


        //Append row in tbody
        book_list.appendChild(newRow)
    }
})