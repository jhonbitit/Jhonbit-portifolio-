const terminal =document.createElement("div");

terminal.className = "terminal";
terminal.innerHTML = `
    <div class="terminal-header">
        <span>●</span> JHONBIT@CYBERLAB: ~
    </div>
    <div id="terminal-text"></div>
`;

document.querySelector(".hero").appendChild(terminal);

const commands = [
    "> Initializing JhonBit...",
    "> Loading cybersecurity modules...",
    "> Connecting to development environment...",
    "> Security protocols: ACTIVE",
    "> System ready."
];

let commandIndex = 0;

function typeCommand() {
    const output = document.getElementById("terminal-text");

    if (commandIndex < commands.length) {
        output.innerHTML += commands[commandIndex] + "<br>";
        commandIndex++;
        setTimeout(typeCommand, 900);
    }
}

typeCommand();
