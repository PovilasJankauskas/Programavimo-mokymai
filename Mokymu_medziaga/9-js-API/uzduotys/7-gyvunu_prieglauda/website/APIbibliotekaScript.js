const BASE_URL = 'http://localhost:7789';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}


window.addEventListener('DOMContentLoaded', async () => {
    let pets = await getData('/pets/2');
    console.log(pets)
});