console.log('%c HI', 'color: firebrick')
let breeds = [];
fetch("https://dog.ceo/api/breeds/image/random/2")
.then((resp) => resp.json())
.then(json => {
    json.message.forEach(image => addPic(image))
});
function addPic(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
}
fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then(json => {
        console.log(json);
        breeds = Object.keys(json.message);
        breeds.forEach(breed => addBreed(breed));
})
function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}
function updateColor(event) {
    event.target.style.color = 'lightblue';
    event.target.style.fontWeight = 'bold';
}