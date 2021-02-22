import gameScript, { directories, help } from '/game.js';

let state = {}; // State of game

// onready:
// Function called when document is loaded and ready
$(document).ready(function() {
    startGame();
});

// onkeydown:
// Function called when keyboard key is pressed
$(document).on("keydown", function(e) {
    e.preventDefault();
    if(state.input) {
        $("#consoleWindow").scrollTop(function() { return this.scrollHeight; });

        let count = $("#consoleWindow").children().length; // Get number of children
        let mText = $("#consoleText"+count);
        if(e.keyCode == 13) { // Enter
            displayCommand(mText.text())
        } else if(validPress(e.keyCode)) { // Characters
            mText.text(mText.text()+e.key);
        } else if(e.keyCode == 8) { // Backspace
            mText.text(mText.text().slice(0, -1));
        }
    }
});

// consoleAppend:
// Takes int as input
// Takes count and appends element to console window
function consoleAppend(count) {
    let txt = "<p><span>"+state.curDirText+"> </span><span id=\"consoleText"+(count+1)+"\"></span><span class=\"cursor\">|</span></p>";
    $("#consoleWindow").append(txt);
} // End of consoleAppend

// validPress:
// Takes keyCode as input
// Takes key and checks if it's valid key pressed
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
    state = Object.assign(state, {curDir: "Dare", curDirText: "C:\\Users\\Dare"});
    $("#consoleWindow").empty();
    consoleAppend(0);
    updatePrompt(1);
} // End of startGame

// updatePrompt:
// Takes int as id
// Updates the text on the prompt
// Dynamically add options as buttons
export function updatePrompt(id) {
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

// displayText:
// Takes inputs:
//    - prompt lines
//    - index of single line
//    - line number
//    - current id
// Displays typing text animation
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
// Takes option object as input
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

    updatePrompt(option.nextText); // Update prompt
} // End of selectOption

// displayCommand:
// Takes command as parameter
// Called when basic command is typed
// Execute command and update console
export function displayCommand(cmd) {
    const scriptNode = gameScript.find(sn => sn.id === state.curId); // Current script object

    let cmdList = cmd.split(" "); // Split command by whitespaces

    console.log(cmdList);

    let mText;
    if(cmdList.length > 0) {
        cmdList[0] = cmdList[0].toLowerCase();
        let mCommand = scriptNode.commands.find(c => c.text == cmdList[0]);
        switch(cmdList[0]) {
            case "help":
                help.forEach(h => {
                    printToConsole(h, true);
                })
                break;
            case "start":
                if(cmdList.length == 2) {
                    let mDir;
                    if(mDir = directories.find(dir => dir.dir == state.curDir)) {
                        if(mDir.children.find(child => child == cmdList[1])) {
                            mText = "Starting " + cmdList[1];
                            mCommand.function();
                        } else {
                            mText = "Executable \'" + cmdList[1] + "\' does not exist in current directory.";
                        }
                    }
                } else {
                    mText = "Incorrect syntax. Type help for more information.";
                }
                break;
            case "cd": // TODO - Implement CD command
                if(cmdList.length == 2) {
                    let mDir;
                    if(mDir = directories.find(dir => dir.dir == state.curDir)) {
                        if(cmdList[1] == ".." && mDir.parent != "") {
                            while(state.curDirText[state.curDirText.length-1] != "\\") {
                                state = Object.assign(state, {curDirText: state.curDirText.slice(0, -1)});
                            }
                            state = Object.assign(state, {curDir: mDir.parent, curDirText: state.curDirText.slice(0, -1)});
                        } else if(mDir.children.find(child => child == cmdList[1])) {
                            state = Object.assign(state, {curDir: cmdList[1], curDirText: state.curDirText+"\\"+cmdList[1]});
                        } else {
                            mText = "Cannot find the path specified";
                        }
                    }
                } else {
                    mText = "Incorrect syntax. Type help for more information.";
                }
                break;
            case "dir": // TODO - Implement DIR command
                break;
            default:
                mText = "Unrecognized command \'" + cmd + "\'. Type help for list of commands.";
                break;
        }
    }
    if(mText) {
        printToConsole(mText, true);
    }
    printToConsole("", true);
    printToConsole("", false);
} // End of displayCommand

// printToConsole;
// Takes string as parameter
// Called to print string to console
export function printToConsole(text, newLine) {
    let count = $("#consoleWindow").children().length; // Get number of children for id
    if(newLine) {
        let brText = "<br>"+text;
        if(!text) {
            brText += "<br>";
        }
        $("#consoleText"+count).append(brText);
    } else {
        $(".cursor").remove(); // Remove current cursor
        consoleAppend(count);
    }

    $("#consoleWindow").scrollTop(function() { return this.scrollHeight; });
} // End of printToConsole