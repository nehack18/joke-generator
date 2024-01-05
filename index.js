document.addEventListener("DOMContentLoaded", () => {
    const jokeText = document.getElementById("jokeText");
    const button = document.getElementById("button");
    const apiUrl = "https://icanhazdadjoke.com";

    button.addEventListener("click", () => {
        fetch(apiUrl, {
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            const joke = data.joke;
            jokeText.textContent = joke;
        })
        .catch(error => {
            console.log("Error fetching joke:", error);
        });
    });
});