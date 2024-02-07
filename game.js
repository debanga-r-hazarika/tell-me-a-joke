const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "Why don't some animals play cards? Because they're afraid of cheetahs!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

const jokeButton = document.getElementById('jokeButton');
const jokeElement = document.getElementById('joke');

jokeButton.addEventListener('click', () => {
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeElement.textContent = randomJoke;
});