async function randomJokes(){
    let jokes = await fetch('https://official-joke-api.appspot.com/random_joke')
    let joke = await jokes.json()
    document.getElementById('joke').innerText = joke.setup + "\n"  + joke.punchline
 }
