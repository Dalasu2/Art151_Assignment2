import { updatePrompt } from '/index.js';

const tab2 = "&nbsp&nbsp";
const tab4 = "&nbsp&nbsp&nbsp&nbsp";

const gameScript = [
    {
        id: 1,
        text: [
            "Setting up localhost . . . 100%",
            "Setting host name: Dare . . . 100%",
            "Authorizing login ******** Successful",
            "Starting XE-03 level 4 clearance . . . 100%",
            "Type start an-e11.exe to launch AN-E11"
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
                function: function() { updatePrompt(3); }
            },
            {
                text: "help",
                function: function() {}
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
                function: function() { updatePrompt(3); }
            },
            {
                text: "help",
                function: function() {}
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
                text: "Skip",
                nextText: 0
            },
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
            {
                text: "help",
                function: function() {}
            }
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
                text: "Skip",
                nextText: 0
            },
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
        commands: [
            {
                text: "help",
                function: function() {}
            }
        ]
    },
    {
        id: 20,
        text: ["Click any option to end the game"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Option 1",
                nextText: -1
            },
            {
                text: "Option 2",
                nextText: -1
            }
        ],
        commands: [
            {
                text: "help",
                function: function() {}
            }
        ]
    }
];

export const directories = [
    {
        dir: "C:",
        parent: "",
        children: [
            "Program Files",
            "Users"
        ]
    },
    {
        dir: "Program Files",
        parent: "C:",
        children: []
    },
    {
        dir: "Users",
        parent: "C:",
        children: [
            "Dare"
        ]
    },
    {
        dir: "Dare",
        parent: "Users",
        children: [
            "an-e11.exe"
        ]
    }
];

export const help = [
    "Syntax: []=>REQUIRED, ()=>OPTIONAL",
    "CD [name] "+tab4+"Changes the current directory.",
    "DIR (name)"+tab4+"Displays a list of files and subdirectories in a directory.",
    "HELP"+tab4+tab4+tab2+"Provides information for commands.",
    "START "+tab4+tab4+"Run executable file."
]

export default gameScript;