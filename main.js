const strings = [
    "Be Happy to get Success in Life",
    "Always love your parents",
    "Respect your elders and love your younger ones",
    "Stay calm to think positive and get success"
];

function showRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];
    document.getElementById('display').textContent = randomString;
}

document.getElementById('showStringBtn').addEventListener('click', showRandomString);
