function onGetJokeClick() {
    console.log('get joke')
}

async function fetchJokes(){
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers:{Accept:"application/json"}
        })
        const joke = await response.json()
        return joke
    } catch(e) {
        throw e
    }
}

fetchJokes()
.then(data => {document.querySelector("body").append(data.joke)}) /* arba .then(data => document.getElementById('jokeValue').innerHTML = data.joke)*/
.catch(error => console.log('Klaida:nepridejote header'));