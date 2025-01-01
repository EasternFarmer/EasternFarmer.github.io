function Main() {
    document.getElementById('Main').className = "grad main"
    return `
        <h1>Welcome<h1>
    `
}
function AboutMe() {
    document.getElementById('Main').className = "grad aboutme"
    return `
        <h1>About Me</h1>
        <p>I'm a 15 y/o kid from Poland that started learning basic programming (Python) at the start of September 2024 with the game called <a href='https://store.steampowered.com/app/2060160/The_Farmer_Was_Replaced/'>The Farmer Was Replaced</a> and since then programming in python more or less. On 16th December 2024 i started my first repo in honour of the game that teached me the very basics of the Python programming language, I collected up every code file from the game and send it to the repo (trials and errors with git). After i thought i did everything related to the game (generally) I went off... and did nothing. During the next week after that I stopped coding entirely, untill i got interested in <a href='https://github.com/Pesinario/The-Farmer-Was-Replaced'>Pesinario's repo</a> and got motivation to code again. I "borrowed" Pesinario's idea about parsing the game's output and caching it in another file(I didn't steal a single line of code from him!) and later made Annotations stripper (both in the repo /scripts) because the game itself doen't support annotations (and doc strings/ f-strings in that matter) and i got too used to annotating stuff. After that.... I'm writing this. Hello o/</p>
    `
}
function Projects() {
    document.getElementById('Main').className = "grad profile"
    return `
        <h1>Projects</h1>
    `
}