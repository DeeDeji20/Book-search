const randCategory = ["romance", "technology", "horror", "history", "comic", "fantasy"]
const randomSearch = Math.floor(Math.random() * Math.floor(6));
console.log(randomSearch);
const fetchCover = () => {
    console.log("Im fetching");
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${randCategory[randomSearch]}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.items.length; i++) {
                const bookCover = document.querySelector("#bookCover");
                const imgLink = document.createElement('img');
                imgLink.classList.add("coverImg");
                imgLink.setAttribute("src", `${data.items[i].volumeInfo.imageLinks.smallThumbnail}`);
                bookCover.append(imgLink);
            }

        })
}

window.onload = fetchCover;