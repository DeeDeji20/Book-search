const claearBtn = document.querySelector('#clear');
claearBtn.addEventListener("click", clearAll);
const emptyCon = document.querySelector("#emptyContainer")

function clearAll() {
    emptyCon.innerHTML = '';
}



const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', getSearch);

function getSearch() {
    const text = document.querySelector('#textVal').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        .then((res) => res.json())
        .then((data) => {
            text.replace(' ', '+')
            const empty = document.querySelector(".empty");
            empty.innerHTML = '';

            const head = document.createElement('h1');
            const headText = document.createTextNode(`Search Result for ${text}`);
            head.appendChild(headText);
            empty.before(head);

            // const head = document.createElement('h1');
            // const headText = document.createTextNode("Titles");
            // head.appendChild(headText);
            // empty.append(head);
            for (let i = 0; i < data.items.length; i++) {
                console.log("I'm in the loop");


                //console.log(data.items[i].volumeInfo.imageLinks.smallThumbnail)
                const divContainer = document.createElement('div');
                divContainer.setAttribute("style", "marginBottom: 20px; marginRight:20px")
                divContainer.classList.add("details")
                const content2 = document.createTextNode(`${data.items[i].volumeInfo.title}`);
                const author = document.createTextNode(`By : ${data.items[i].volumeInfo.authors}`);
                const para = document.createElement('p');
                const authorPara = document.createElement('p');

                const linkInfo = document.createElement('a');
                linkInfo.textContent = "Show More";
                linkInfo.classList.add('linkBtn');
                linkInfo.setAttribute('href', `${data.items[i].volumeInfo.infoLink}`);
                para.appendChild(content2);
                authorPara.appendChild(author);
                const imgLink = document.createElement('img');
                imgLink.setAttribute("src", `${data.items[i].volumeInfo.imageLinks.thumbnail}`);

                divContainer.appendChild(imgLink);
                divContainer.appendChild(para);
                divContainer.appendChild(authorPara);
                divContainer.appendChild(linkInfo);
                empty.appendChild(divContainer)

            }
        })
}


const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', getCategory);

function getCategory() {
    const contain = document.querySelector(".contain")
        //contain.innerHTML = '';

    const category = document.querySelector('#catSelect').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}`)
        .then((res) => res.json())
        .then((data) => {

            const empty = document.querySelector(".empty");
            empty.innerHTML = '';

            const head = document.createElement('h1');
            const headText = document.createTextNode(`Search Result for ${category}`);
            head.appendChild(headText);
            empty.before(head);

            for (let i = 0; i < data.items.length; i++) {
                console.log("I'm in the loop");

                const divContainer = document.createElement('div');
                divContainer.classList.add("details")
                const content2 = document.createTextNode(`${data.items[i].volumeInfo.title}`);
                const author = document.createTextNode(`By : ${data.items[i].volumeInfo.authors}`);
                const para = document.createElement('p');
                const linkInfo = document.createElement('a');
                linkInfo.textContent = "Show More";
                linkInfo.classList.add('linkBtn');
                linkInfo.setAttribute('href', `${data.items[i].volumeInfo.infoLink}`)
                const authorPara = document.createElement('p');

                para.appendChild(content2);
                const imgLink = document.createElement('img');
                imgLink.setAttribute("src", `${data.items[i].volumeInfo.imageLinks.smallThumbnail}`);
                authorPara.appendChild(author);
                divContainer.appendChild(imgLink);
                divContainer.appendChild(para);
                divContainer.appendChild(authorPara);
                divContainer.appendChild(linkInfo);
                empty.appendChild(divContainer)

            }
        })
}