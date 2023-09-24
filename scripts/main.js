import myBook1 from '../JSON/myBook1.json' assert{type: 'json'};
import myBook2 from '../JSON/myBook2.json' assert{type: 'json'};
import myBook3 from '../JSON/myBook3.json' assert{type: 'json'};

const bookArray = [myBook1, myBook2, myBook3];
const myForm = document.forms.searchForm;

const bookTitle = document.querySelector('#bookTitle');
const bookStatus = document.querySelector('.myBookPosition');
const bookDescription = document.querySelector('#descr');

let counterDescr = 0;
let counterSrch = 0;

let library = {
    search: function bookSearch(bookTitle) {
        let foundedBook;
        let result = bookArray.find(item => item.Title == `${bookTitle}`);
        if (result == undefined) {
            foundedBook = 'Книга не найдена';

        }
        if (result != undefined) {
            foundedBook = `Книга найдена: ${result.Title}`;

        }
        return foundedBook;
    },
    output: function bookInfo(bookTitle) {
        let descriptionResult;
        let result = bookArray.find(item => item.Title == `${bookTitle}`);
        if(result == undefined) {
            descriptionResult = 'Книга не найдена';
        }
        if(result != undefined) {
            descriptionResult = `${result.Description}`;

        }
        return descriptionResult;
    },
    sort: function bookSort() {
        bookArray.sort(function (a,b) {
            return a.YearOfRelease - b.YearOfRelease;
        });
    }
}

myForm.addEventListener('submit', e => {
    e.preventDefault();
})

// Поиск книги по названию
document.querySelector('#searchBtn').addEventListener('click', () => {
    counterSrch++;
    if (counterSrch % 2 != 0) {
        document.querySelector('.myBookPosition').style.display = 'block';
       bookStatus.innerText = library.search(bookTitle.value);
    }
    else {
        document.querySelector('.myBookPosition').style.display = 'none';
    }
})

// Вывод информации о книге
document.querySelector('#descritpionBtn').addEventListener('click', () => {
    counterDescr++;
    if (counterDescr % 2 != 0) {
        document.querySelector('.descriptionBox').style.display = 'block';
        bookDescription.innerText = library.output(bookTitle.value);
    }
    else {
        document.querySelector('.descriptionBox').style.display = 'none';
    }
})

// Сортировка книг в хронологическом порядке
library.sort();
console.log(bookArray);