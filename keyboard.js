let state = {};
const gameScript = [
    {
        id: 1,
        text: [
            "Setting up localhost . . . 100%",
            "Setting host name: Dare . . . 100%",
            "Authorizing login ******** Successful",
            "Starting XE-03 level 4 clearance . . . 100%",
            "Type start to launch AN-E11"
        ],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Help",
                nextText: 2
            }
        ],
        commands: [
            {
                text: "start",
                function: function() {updatePrompt(3);}
            }
        ]
    },
    {
        id: 2,
        text: [
            "Interact with the prompt window by selecting options",
            "Interact with the terminal window using the keyboard",
            "Type help to display list of commands",
            "Type start to launch XE-03"
        ],
        options: [
            {
                text: "Skip",
                nextText: 0
            }
        ],
        commands: [
            {
                text: "start",
                function: function() {updatePrompt(3);}
            }
        ]
    },
    {
        id: 3,
        text:
        [
            "You arrive in a room. There's a chair and a desk.",
            "Which do you take a look at first?"
        ],
        options:
        [
            {
                text: "Chair",
                nextText: 4
            },
            {
                text: "Desk",
                nextText: 4
            }
        ],
        commands: [
            
        ]
    },
    {
        id: 4,
        text: [
            "Here are a list of suspects, Investigator.",
            "Who would you like to interrogate?"
        ],
        options:
        [
            {
                text: "Annie",
                nextText: 20
            },
            {
                text: "Darius",
                nextText: 20
            },
            {
                text: "Davian",
                nextText: 20
            }
        ],
        commands: []
    },
    {
        id: 20,
        text: ["Click any option to end the game"],
        options: [
            {
                text: "Option 1",
                nextText: -1
            },
            {
                text: "Option 2",
                nextText: -1
            }
        ]
    }
];

$(document).ready(function() {
    startGame();
});

$(document).on("keydown", function(e) {
    e.preventDefault();
    if(state.input) {
        let count = $("#consoleWindow").children().length; // Get number of children
        let mText = $("#consoleText"+count);
        if(e.keyCode == 13) { // Enter
            $(".cursor").remove(); // Remove current cursor
            consoleAppend(count);

            selectCommand(mText.text().toLowerCase())
        } else if(validPress(e.keyCode)) { // Characters
            mText.text(mText.text()+e.key);
        } else if(e.keyCode == 8) { // Backspace
            mText.text(mText.text().slice(0, -1));
        }
    }
});

// consoleAppend:
// Takes count and appends element to console window
function consoleAppend(count) {
    let txt = "<p><span>C:\\Usr\\Dare> </span><span id=\"consoleText"+(count+1)+"\"></span><span class=\"cursor\">|</span></p>";
    $("#consoleWindow").append(txt);
} // End of consoleAppend

// validPress:
// takes key and checks if it's valid key pressed
function validPress(key) {
    return (key > 47 && key < 58) // Numbers
        || key == 32 // Space
        || (key > 64 && key < 91) // Letters
        || (key > 95 && key < 112)  // Numpad Numbers
        || (key > 185 && key < 193) // ;=,-./`
        || (key > 218 && key < 223); // [\]'
} // End of validPress

// Game Logic

// startGame:
// Clear console window
// Add first console text
// Update prompt window
function startGame() {
    $("#consoleWindow").empty();
    consoleAppend(0);
    updatePrompt(1);
} // End of startGame

// updatePrompt:
// Updates the text on the prompt
// Dynamically add options as buttons
function updatePrompt(id) {
    state = Object.assign(state, {curId: id, time: 1000});
    const scriptNode = gameScript.find(sn => sn.id === id);
    $("#promptText").empty();
    let i = 1;
    scriptNode.text.forEach(() => {
        let p = document.createElement("p");
        p.setAttribute("id", "line"+i++);
        $("#promptText").append(p);
    });
    displayText(scriptNode.text, 0, 1, id);

    $("#promptOptions").empty();
    scriptNode.options.forEach(option => {
        let button = document.createElement("input");
        button.setAttribute("class", "txtbtn");
        button.setAttribute("type", "button");
        button.setAttribute("value", option.text);
        button.addEventListener("click", () => selectOption(option));
        $("#promptOptions").append(button);
    });
} // End of updatePrompt

function displayText(lines, idx, i, id) {
    if(id != state.curId) {
        return;
    }
    let interval = 80;
    if(i <= lines.length) {
        state = Object.assign(state, {input: false});
        if(idx < lines[i-1].length) {
            let mLine = $("#line"+i);
            mLine.text(mLine.text()+lines[i-1].charAt(idx));
            if(lines[i-1].charAt(idx) == ".") { interval = 600; }
            setTimeout(function(){displayText(lines, idx+1, i, id);}, Math.min(interval, state.time));
        } else {
            setTimeout(function(){displayText(lines, 0, i+1, id);}, Math.min(300, state.time));
        }
    } else {
        state = Object.assign(state, {input: true});
    }
} // End of displayText

// selectOption:
// Called when button is clicked
// Call the corresponding updatePrompt
function selectOption(option) {
    if(option.nextText == 0) { // Fast Forward
        state = Object.assign(state, {time: 0});
        return;
    } else if(option.nextText < 0) { // Reset Game
        startGame();
        return;
    }

    updatePrompt(option.nextText);
} // End of selectOption

// selectCommmand:
// Takes string as parameter
// Called when command is entered
// Update display and execute valid command
function selectCommand(command) {
    const scriptNode = gameScript.find(sn => sn.id === state.curId);
    let mFunction = function() {unrecognizedCommand(command)};
    scriptNode.commands.forEach(cmd => {
        if(cmd.text == command) {
            mFunction = cmd.function;
        }
    })
    mFunction();
} // End of selectCommand

// unrecognizedCommand:
// Takes string as parameter
// Prints out statement saying command is not recognized
function unrecognizedCommand(command) {
    $(".cursor").remove(); // Remove current cursor
    let count = $("#consoleWindow").children().length; // Get number of children
    $("#consoleText"+(count)).text("Unrecognized command \'" + command + "\'. Type help for list of commands.");
    consoleAppend(count);
} // End of unrecognizedCommand