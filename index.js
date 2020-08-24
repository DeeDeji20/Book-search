const claearBtn = document.querySelector('#clear');
claearBtn.addEventListener("click", clearAll);
const empty = document.querySelector(".empty")

function clearAll() {
    empty.innerHTML = '';
}

// document.addEventListener("keyup", (e) => {
//     if (e.keyCode == 13) {
//         getSearch
//     }
// })

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', getSearch);

function getSearch() {
    const text = document.querySelector('#textVal').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        .then((res) => res.json())
        .then((data) => {

            // const head = document.createElement('h1');
            // const headText = document.createTextNode(`Search Result for ${text}`);
            // head.appendChild(headText);
            // empty.before(head);

            // const head = document.createElement('h1');
            // const headText = document.createTextNode("Titles");
            // head.appendChild(headText);
            // empty.append(head);
            enterSearch(data)
        })
}


const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', getCategory);

function getCategory() {

    const category = document.querySelector('#catSelect').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}`)
        .then((res) => res.json())
        .then((data) => {

            enterSearch(data)



        })
}

const enterSearch = (data) => {

    const empty = document.querySelector(".empty");
    empty.innerHTML = '';

    for (let i = 0; i < data.items.length; i++) {


        const divContainer = document.createElement('div');
        divContainer.classList.add("details")
        const volumeContent = document.createTextNode(`${data.items[i].volumeInfo.title}`);
        const author = document.createTextNode(`By : ${data.items[i].volumeInfo.authors}`);
        const para = document.createElement('p');
        const linkInfo = document.createElement('a');
        linkInfo.textContent = "Show More";
        linkInfo.classList.add('linkBtn');
        linkInfo.setAttribute('href', `${data.items[i].volumeInfo.infoLink}`)
        const authorPara = document.createElement('p');

        para.appendChild(volumeContent);
        const imgLink = document.createElement('img');
        imgLink.setAttribute("src", `${data.items[i].volumeInfo.imageLinks.smallThumbnail}`);
        authorPara.appendChild(author);
        divContainer.appendChild(imgLink);
        divContainer.appendChild(para);
        divContainer.appendChild(authorPara);
        divContainer.appendChild(linkInfo);
        empty.appendChild(divContainer);
        // empty.before(headText);

    }
}