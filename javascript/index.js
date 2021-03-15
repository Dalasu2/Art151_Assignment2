import gameScript, { gameplay, help, tab4 } from '../javascript/game.js';

let state; // State of game

// onready:
// Function called when document is loaded and ready
$(document).ready(function() {
    startGame();
});

// onkeydown:
// Function called when keyboard key is pressed
$(document).on("keydown", function(e) {
    e.preventDefault();
    // if(state.input) {
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
    // }
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
    state = {};
    state = Object.assign(state, {offset: 8, numCharacters: 4, curDir: "Dare", curDirText: "C:\\Users\\Dare", files: []});
    $("#consoleWindow").empty();
    $("#screenWindow").empty();
    consoleAppend(0);
    updatePrompt(1);
} // End of startGame

// addOption:
// Takes option as parameter
// Create option button and add to prompt window
function addOption(option) {
    // Add all characters as options
    if(option.text === "Characters") {
        state.characters.forEach(c => {
            addOption({
                id: c.id,
                text: c.info.name,
                isCharacter: true,
                character: c,
                nextText: c.nextText
            });
        });
        return;
    }

    if(option.requiredState == null || option.requiredState(state.curChar)) {
        // Create normal options button
        let button = document.createElement("input");
        if(option.text === "Skip") { button.setAttribute("id", "skipbtn"); }
        button.setAttribute("class", "txtbtn");
        button.setAttribute("type", "button");
        button.setAttribute("value", option.text);
        button.addEventListener("click", () => selectOption(option));
        $("#promptOptions").append(button);
    }
} // End of addOption

// updatePrompt:
// Takes int as id
// Updates the text on the prompt
// Dynamically add options as buttons
function updatePrompt(id) {
    state = Object.assign(state, {curId: id, time: 1000});
    const scriptNode = gameScript.find(sn => sn.id === id);

    if(id === 7 || id === 4) { // Accusing
        $("#screenWindow").empty();

        let data = document.createElement("img");
        data.setAttribute("id", "icon");
        if(id === 4 || (state.curChar && !state.curChar.guilty)) data.setAttribute("src", "../images/fired_icon.png");
        else data.setAttribute("src", "../images/win_icon.png");
        $("#screenWindow").append(data);
    }

    $("#promptText").empty();
    let i = 1;
    let mTextList = [];
    // Loop through each script prompt and create text line
    scriptNode.text.forEach(txt => {
        let mText = txt.replaceAll("%num", state.numCharacters)
            .replaceAll("%crime", state.crime)
            .replaceAll("%char", state.curCharName);

        let curChar = state.curChar;
        if(curChar) {
            let mGuiltyChar = state.characters.find(c => c.guilty);
            let mGuiltyText = "guilty!";
            if(!curChar.guilty) {
                mGuiltyText = "not " + mGuiltyText;
            }
            mText = mText.replaceAll("%guilty", mGuiltyText)
                .replaceAll("%pronoun", curChar.info.pronoun);
            if(id >= 8) {
                let mResponses = gameplay.find(gp => gp.title === "responses")
                    .list.find(li => li.id === curChar.id)
                    .responses.find(r => r.prompt === id-8);
                let msg = mResponses.msg[Math.floor(Math.random()*mResponses.msg.length)];
                if(id >= 10) {
                    let mPerson = mGuiltyChar.info.person;
                    let mPronoun = mGuiltyChar.info.pronoun;
                    let mAge = (mGuiltyChar.info.stats.age > 29) ? "older" : "younger";
                    if(curChar.guilty) {
                        msg = mResponses.lies[Math.floor(Math.random()*mResponses.lies.length)];
                        if(mPerson == "Man") {
                            mPerson = "Woman";
                            mPronoun = "She";
                        } else {
                            mPerson = "Man";
                            mPronoun = "He";
                        }
                        mAge = (mGuiltyChar.info.stats.age > 29) ? "younger" : "older";
                    }

                    msg = msg.replaceAll("%guilty_gender_l", mPerson.toLowerCase())
                             .replaceAll("%guilty_pronoun_l", mPronoun.toLowerCase())
                             .replaceAll("%guilty_pronoun_h", mPronoun)
                             .replaceAll("%age", mAge);

                    state.characters.find(c => c.info.name == state.curCharName).info.notes.push(msg);
                }
                mText = mText.replaceAll("%prompt", msg);
            }

            console.log(state.characters.find(c => c.guilty).info.stats.gender.toLowerCase());
        }

        mTextList.push(mText);
        let p = document.createElement("p");
        p.setAttribute("id", "line"+i++);
        $("#promptText").append(p);
    });
    displayText(mTextList, 0, 1, id);

    $("#promptOptions").empty();
    // Loop through each script option and create button
    scriptNode.options.forEach(option => addOption(option));
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
        $("#skipbtn").remove();
    }
} // End of displayText

// selectOption:
// Takes option object as input
// Called when button is clicked
// Call the corresponding updatePrompt
function selectOption(option) {
    if(option.isCharacter) {
        state = Object.assign(state, {
            curCharId: option.nextText,
            curCharName: option.text,
            curChar: option.character
        });
    } else if(option.nextText <= 5) {
        state = Object.assign(state, {curCharId: -1, curCharName: "", curChar: null});
    }

    console.log(option.nextText);

    if(option.nextText == 0) { // Fast Forward
        state = Object.assign(state, {time: 0});
        return;
    } else if(option.nextText < 0) { // Reset Game
        startGame();
        return;
    } else if(option.nextText === 6) {
        console.log(state.curChar.guilty);
    } else if(option.nextText > 9) {
        state.characters.find(c => c.info.name == state.curCharName).info.notes.push(option.text);
        console.log(option.text);
    }

    if(option.updateState) {
        option.updateState(state.curChar);
    }

    updatePrompt(option.nextText); // Update prompt
} // End of selectOption

// displayCommand:
// Takes command as parameter
// Called when command is typed into terminal
// Execute command and update windows
function displayCommand(cmd) {
    const scriptNode = gameScript.find(sn => sn.id === state.curId); // Current script object

    let cmdList = cmd.split(" "); // Split command by whitespaces
    
    let mText;
    if(!state.gameOver && cmdList.length > 0) { // Commands entered
        cmdList[0] = cmdList[0].toLowerCase();
        switch(cmdList[0]) {
            case "restart":
                // startGame();
                location.reload();
                break;
            case "start":
                if(state.curId <= 2) { // If game is in beginning state
                    let ranNum = [];
                    let mCharacters = [];
                    let charactersList = gameplay.find(gp => gp.title === "characters").list;
                    charactersList.forEach(c => {
                        mCharacters.push(c.name);
                    });
                    // let mCharacters = gameplay.find(gp => gp.title === "characters").list; // Get list of characters

                    // Shuffle list
                    for(let i = 0; i < mCharacters.length; i++) {
                        ranNum.push(i);
                    }
                    ranNum.sort(function() { return Math.random() - 0.5; });

                    // Choose random characters
                    let mCharList = [];
                    let guiltyId = Math.floor(Math.random()*state.numCharacters)+1;
                    for(let i = 1; i <= state.numCharacters; i++) {
                        let mName = mCharacters[ranNum[i-1]];
                        // Character Information array
                        mCharList.push({
                            id: Math.floor(Math.random() * gameplay.find(gp => gp.title === "responses").list.length),
                            info: charactersList.find(c => c.name === mName),
                            guilty: (i == guiltyId),
                            nextText: state.offset
                        });

                        // Character Files array
                        let mFiles = state.files;
                        mFiles.push({
                            fileName: mName.toLowerCase(),
                            fileExt: ".txt"
                        });
                        state = Object.assign(state, {files: mFiles});
                    }
                    state = Object.assign(state, {characters: mCharList});

                    // Choose random crime
                    ranNum = [];
                    let mCrimes = gameplay.find(gp => gp.title === "crimes").list; // Get list of crimes
                    mCrimes.sort(function() { return Math.random() - 0.5; }); // Randomly sort crimes and select one
                    state = Object.assign(state, {crime: mCrimes[0]});

                    updatePrompt(3); // Update prompt
                    mText = "Starting...";
                }
                break;
            case "help":
                help.forEach(h => {
                    printToConsole(h, true);
                });
                break;
            case "vi":
            case "view":
                if(cmdList.length == 2) {
                    let mFile = state.files.find(file => (file.fileName+file.fileExt) === cmdList[1]);
                    if(mFile) {
                        // Create paper object
                        $("#screenWindow").empty();
                        $.get("paper.html", function(data) {
                            $("#screenWindow").append(data);
                            // Event handler for button
                            $("#close").on("click", function() {
                                $("#paper").remove();
                            });

                            // Title of profile
                            let mTitle = mFile.fileName;
                            mTitle = mTitle.charAt(0).toUpperCase() + mTitle.slice(1);
                            $("#papertitle").text(mTitle+"\'s Profile");

                            // Person information
                            let mCharInfo = state.characters.find(c => c.info.name === mTitle).info;
                            const mChar = mCharInfo.stats;
                            for(const stat in mChar) {
                                // Grab stat and add padding to end
                                let mStat = stat.charAt(0).toUpperCase(0) + stat.slice(1) + ": ";
                                let count = mStat.length;
                                while(count < 18) { mStat += "&nbsp"; count++; }
                                mStat += mChar[stat] + "<br>";
                                $("#paperInformation").append(mStat);
                            }

                            // Print out each note
                            $("#paperInformation").append("<br>Notes:<br>");
                            mCharInfo.notes.forEach(note => {
                                $("#paperInformation").append(note + "<br>");
                            })
                        });
                        mText = "Opening " + cmdList[1];
                    } else {
                        mText = "File does not exist in directory.";
                    }
                } else {
                    mText = "Incorrect syntax. Type help for more information.";
                }
                break;
            case "ls":
            case "dir":
                printToConsole("Directory for "+state.curDirText, true);
                state.files.forEach(file => {
                    printToConsole(tab4+file.fileName+file.fileExt, true);
                });
                break;
            default:
                mText = "Unrecognized command " + cmdList[0];
        }
    }

    // Print text to terminal
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

    $("#consoleWindow").scrollTop(function() { return this.scrollHeight; }); // Scroll to bottom of console
} // End of printToConsole