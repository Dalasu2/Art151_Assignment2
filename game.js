const tab2 = "&nbsp&nbsp";
export const tab4 = "&nbsp&nbsp&nbsp&nbsp";

export const gameplay = [
    {
        title: "characters",
        list: [
            {
                name: "Annie",
                pronoun: "She",
                person: "Woman",
                stats: {
                    gender: "Female",
                    age: 21,
                    height: "5'0\"",
                    weight: "99 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            },
            {
                name: "Darius",
                pronoun: "He",
                person: "Man",
                stats: {
                    gender: "Male",
                    age: 21,
                    height: "5'9\"",
                    weight: "142 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            },
            {
                name: "Davian",
                pronoun: "He",
                person: "Man",
                stats: {
                    gender: "Male",
                    age: 11,
                    height: "4'10\"",
                    weight: "76 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            },
            {
                name: "Matthew",
                pronoun: "He",
                person: "Man",
                stats: {
                    gender: "Male",
                    age: 23,
                    height: "6'1\"",
                    weight: "148 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            },
            {
                name: "Monica",
                pronoun: "She",
                person: "Woman",
                stats: {
                    gender: "Female",
                    age: 18,
                    height: "5'5\"",
                    weight: "106 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            },
            {
                name: "Samuel",
                pronoun: "He",
                person: "Man",
                stats: {
                    gender: "Male",
                    age: 50,
                    height: "5'7\"",
                    weight: "180 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            },
            {
                name: "Dina",
                pronoun: "She",
                person: "Woman",
                stats: {
                    gender: "Female",
                    age: 47,
                    height: "5'4\"",
                    weight: "149 lbs"
                },
                notes: [
                    "Tobias is the name of the victim",
                    ""
                ]
            }
        ]
    },
    {
        title: "crimes",
        list: [
            "robbing a store",
            "kidnapping",
            "attempted murder",
            "murder"
        ],
        victim: [
            "George",
            "John",
            "Jeff"
        ],
        weapon: [
            "knife",
            "gun",
            "pencil"
        ]
    },
    {
        title: "responses",
        list: [
            {
                id: 0, // Scared
                responses: [
                    {
                        prompt: 0,
                        msg: [
                            "Inspector, I don't even know why I'm here. I haven't done anything wrong!",
                            "Am I free to go? I promise I'm not guilty!"
                        ]
                    },
                    {
                        prompt: 1,
                        msg: [
                            "You have a question for me?"
                        ]
                    },
                    {
                        prompt: 2,
                        msg: [
                            "Yes.",
                            "I'm not sure."
                        ],
                        lies: [
                            "Yes.",
                            "No.",
                            "I'm not sure."
                        ]
                    },
                    {
                        prompt: 3,
                        msg: [
                            "It's Tobias.",
                            "I think it's Tobias.",
                            "I don't know his name."
                        ],
                        lies: [
                            "I think it's John.",
                            "I don't know.",
                            "I don't know his name.",
                            "I'm not too sure what his name was.",
                            "I think it's Tobias.",
                            "I can't remember."
                        ]
                    },
                    {
                        prompt: 4,
                        msg: [
                            "No!",
                            "Of course not!"
                        ],
                        lies: [
                            "No!",
                            "Of course not!"
                        ]
                    },
                    {
                        prompt: 5,
                        msg: [
                            "I'm not guilty!",
                            "Of course I'm not guilty!"
                        ],
                        lies: [
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "I'm not guilty!",
                            "Of course I'm not guilty!",
                            "Alright, it was me."
                        ]
                    },
                    {
                        prompt: 6,
                        msg: [
                            "I think this happened late at night.",
                            "I think some time after dinner.",
                            "This happened after a late night walk.",
                            "Probably after 8 pm."
                        ],
                        lies: [
                            "I think this happened late at night.",
                            "I think some time after dinner.",
                            "This happened after a late night walk.",
                            "Probably after 8 pm.",
                            "It couldn't have been too late at night."
                        ]
                    },
                    {
                        prompt: 7,
                        msg: [
                            "Honestly, I can't even remember anymore.",
                            "I heard a noise and got scared, so I checked it out."
                        ],
                        lies: [
                            "Honestly, I can't even remember anymore.",
                            "I heard a noise and got scared, so I checked it out.",
                            "It was just bad timing.",
                            "Who says I was there?"
                        ]
                    },
                    {
                        prompt: 8,
                        msg: [
                            "I'm not sure, I think I saw a %guilty_gender_l.",
                            "There was a %guilty_gender_l.",
                            "I think I saw a %guilty_gender_l.",
                            "There was a %guilty_gender_l there. I couldn't see who though.",
                            "I'm not sure if there was anyone else.",
                            "I don't remember seeing anyone else."
                        ],
                        lies: [
                            "I'm not sure, I think I saw a %guilty_gender_l.",
                            "There was a %guilty_gender_l.",
                            "I think I saw a %guilty_gender_l.",
                            "There was a %guilty_gender_l there. I couldn't see who though.",
                            "I'm not sure if there was anyone else.",
                            "I don't remember seeing anyone else."
                        ]
                    },
                    {
                        prompt: 9,
                        msg: [
                            "I can't remember. I'm sorry.",
                            "I wasn't paying attention.",
                            "It all happened so fast, I can't remember if %gender_pronoun_l was old or young."
                        ],
                        lies: [
                            "I can't remember. I'm sorry.",
                            "I wasn't paying attention.",
                            "It all happened so fast, I can't remember if %gender_pronoun_l was old or young."
                        ]
                    },
                    {
                        prompt: 10,
                        msg: [
                            "Am I free to go?",
                            "Can I leave now? It's been a long day."
                        ],
                        lies: [
                            "Am I free to go?",
                            "Can I leave now? It's been a long day."
                        ]
                    }
                ]
            },
            {
                id: 1, // Aggressive
                responses: [
                    {
                        prompt: 0,
                        msg: [
                            "I promise I'll sue you after this!",
                            "You'll get what's coming for you, don't you worry."
                        ]
                    },
                    {
                        prompt: 1,
                        msg: [
                            "You have a question for me?"
                        ]
                    },
                    {
                        prompt: 2,
                        msg: [
                            "Obviously.",
                            "You tell me.",
                            "I'm not sure."
                        ],
                        lies: [
                            "Obviously.",
                            "You tell me.",
                            "No.",
                            "I'm not sure."
                        ]
                    },
                    {
                        prompt: 3,
                        msg: [
                            "It's Tobias.",
                            "I think it's Tobias.",
                            "I never asked.",
                            "I don't have to answer any questions."
                        ],
                        lies: [
                            "I think it's John.",
                            "I don't know his name.",
                            "I don't know him.",
                            "I think it's Tobias.",
                            "I never asked.",
                            "I don't have to answer any questions.",
                            "I can't remember off the top of my head."
                        ]
                    },
                    {
                        prompt: 4,
                        msg: [
                            "No!",
                            "Are you serious? Of course not. Idiot."
                        ],
                        lies: [
                            "No!",
                            "Are you serious? Of course not. Idiot."
                        ]
                    },
                    {
                        prompt: 5,
                        msg: [
                            "It wasn't me!",
                            "Are you stupid?"
                        ],
                        lies: [
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "It wasn't me!",
                            "Are you stupid?",
                            "Alright you got me. It was me."
                        ]
                    },
                    {
                        prompt: 6,
                        msg: [
                            "This was definitely at night.",
                            "I think some time after dinner. I could be wrong though.",
                            "I was watching the nightly news.",
                            "I was about to fall asleep when it happened.",
                            "The sun had already set once it happened."
                        ],
                        lies: [
                            "This was definitely at night.",
                            "I think some time after dinner. I could be wrong though.",
                            "I was watching the nightly news.",
                            "I was about to fall asleep when it happened.",
                            "The sun had already set once it happened.",
                            "I could be wrong, but the sun was still up."
                        ]
                    },
                    {
                        prompt: 7,
                        msg: [
                            "It's a free country.",
                            "Because I felt like it.",
                            "I had to run some errands."
                        ],
                        lies: [
                            "It's a free country.",
                            "Because I felt like it.",
                            "I had to run some errands.",
                            "Mind your own business.",
                            "I wasn't there."
                        ]
                    },
                    {
                        prompt: 8,
                        msg: [
                            "I definitely saw a %guilty_gender_l there.",
                            "There was a %guilty_gender_l.",
                            "There was a %guilty_gender_l there, maybe two.",
                            "I remember seeing a %guilty_gender_l! %guilty_pronoun_h probably did it!",
                            "There was another person! %guilty_pronoun_h was acting weird!"
                        ],
                        lies: [
                            "I definitely saw a %guilty_gender_l there.",
                            "There was a %guilty_gender_l.",
                            "There was a %guilty_gender_l there, maybe two.",
                            "I remember seeing a %guilty_gender_l! %guilty_pronoun_h probably did it!",
                            "There was another person! %guilty_pronoun_h was acting weird!"
                        ]
                    },
                    {
                        prompt: 9,
                        msg: [
                            "%guilty_pronoun_h was definitely %age.",
                            "%guilty_pronoun_h looked like %guilty_pronoun_l was %age.",
                            "Probably %age."
                        ],
                        lies: [
                            "%guilty_pronoun_h was definitely %age.",
                            "%guilty_pronoun_h looked like %guilty_pronoun_l was %age.",
                            "Probably %age."
                        ]
                    },
                    {
                        prompt: 10,
                        msg: [
                            "Can I leave now?",
                            "No. Just let me out of here."
                        ],
                        lies: [
                            "Can I leave now?",
                            "No. Just let me out of here."
                        ]
                    }
                ]
            }
        ]
    }
];

const gameScript = [
    {
        id: 1,
        text: [
            "Setting up localhost . . . 100%",
            "Setting host name: Dare . . . 100%",
            "Authorizing login ******** Successful",
            "Starting XE-03 level 4 clearance . . . 100%",
            "Type start to begin",
            "Press help for more information"
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
        ]
    },
    {
        id: 2,
        text: [
            "Interact with the prompt window by selecting options",
            "Interact with the screen window using your mouse",
            "Interact with the terminal window using the keyboard",
            "You can view information on characters using the terminal",
            "Type help to display list of commands",
            "Type start to begin"
        ],
        options: [
            {
                text: "Skip",
                nextText: 0
            }
        ]
    },
    {
        id: 3,
        text:
        [
            "Welcome Investigator.",
            "It's good to have you back in the office.",
            "We have %num suspects for you to investigate. All of them were either witnesses or know the victim, Tobias.",
            "One of them is guilty of %crime.",
            "Are you ready to start working?"
        ],
        options:
        [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Yes",
                nextText: 5
            },
            {
                text: "No",
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: ["Well. . . it was nice to see you again."],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Restart",
                nextText: -1
            }
        ],
        fired: true
    },
    {
        id: 5,
        text: [
            "Here are a list of suspects, Investigator.",
            "Who would you like to interrogate?",
            "You can also view each individual file. Type help for more information."
        ],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Characters"
            }
        ]
    },
    {
        id: 6,
        text: [
            "Are you sure you want to accuse %char?",
            "There is no turning back after this decision"
        ],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Yes",
                nextText: 7
            },
            {
                text: "No",
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: [
            "You are accusing %char.",
            "%pronoun is %guilty"
        ],
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Back",
                nextText: 5
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Ask",
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Back",
                nextText: 8
            },
            {
                text: "Do you know the victim?",
                nextText: 10,
                requiredState: (currentState) => !currentState.asked1,
                updateState: (currentState) => currentState.asked1 = true
            },
            {
                text: "What is the victim\'s name?",
                nextText: 11,
                requiredState: (currentState) => currentState.asked1 && !currentState.asked2,
                updateState: (currentState) => currentState.asked2 = true
            },
            {
                text: "Are you guilty?",
                nextText: 12,
                requiredState: (currentState) => !currentState.asked3,
                updateState: (currentState) => currentState.asked3 = true
            },
            {
                text: "Are you sure you\'re not guilty?",
                nextText: 13,
                requiredState: (currentState) => currentState.asked3 && !currentState.asked4,
                updateState: (currentState) => currentState.asked4 = true
            },
            {
                text: "When did this happen?",
                nextText: 14,
                requiredState: (currentState) => !currentState.asked5,
                updateState: (currentState) => currentState.asked5 = true
            },
            {
                text: "Why were you there?",
                nextText: 15,
                requiredState: (currentState) => currentState.asked5 && !currentState.asked6,
                updateState: (currentState) => currentState.asked6 = true
            },
            {
                text: "Was there anyone else there?",
                nextText: 16,
                requiredState: (currentState) => currentState.asked5 && !currentState.asked7,
                updateState: (currentState) => currentState.asked7 = true
            },
            {
                text: "Were they older or younger?",
                nextText: 17,
                requiredState: (currentState) => currentState.asked7 && !currentState.asked8,
                updateState: (currentState) => currentState.asked8 = true
            },
            {
                text: "Is there anything else you\'d like to tell me?",
                nextText: 18,
                requiredState: (currentState) => currentState.asked1 && currentState.asked2 && currentState.asked3 && currentState.asked4 && 
                    currentState.asked5 && currentState.asked6 && currentState.asked7 && currentState.asked8 && !currentState.asked9,
                updateState: (currentState) => currentState.asked9 = true
            }
        ]
    },
    {
        id: 10,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 11,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 12,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 13,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 14,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 15,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 16,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 17,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    },
    {
        id: 18,
        text: ["%prompt"],
        options: [
            {
                text: "Skip",
                nextText: 0
            },
            {
                text: "Accuse",
                nextText: 6
            },
            {
                text: "Back",
                nextText: 9
            }
        ]
    }
];

export const help = [
    "HELP "+tab4+tab4+"Provides information for commands.",
    "START"+tab4+tab4+"Command used at beginning to start game.",
    "RESTART"+tab4+tab2+"Restart the game and lose progress.",
    "VIEW [file]"+tab2+"View data stored in text file.",
    "VI [file]"+tab4+"View data stored in text file.",
    "DIR"+tab2+tab4+tab4+"Displays a list of files.",
    "LS "+tab2+tab4+tab4+"Displays a list of files."
];

export default gameScript;