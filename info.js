const projectInfo = {
    personalProject: {
        catToTheTop: {
            id: "catToTheTop",
            name: "Cat To The Top (2024)",
            summary: `A casual mobile game where you jump as high as you can within the time limit.
                        Simply tap the screen to jump! A personal project I made to get familiar with the Godot Game Engine.`,
            thumbnail: "/assets/catToTheTop_thumbnail.png",
            banner: "/assets/catToTheTop_thumbnail.png",
            contributions:`As part of my learning, I developed the entire project except for the music. This entails:
                            <ul>
                                <li> Implementing the Level Manager that load the different platform patterns to form the difficulty of the game.</li>
                                <li> Implementing the Player controls and player movement for the core gameplay experience of the game.</li>
                                <li> Designing of the platform patterns, ensuring the patterns are balanced and clearable while maintaining the expected difficulty.</li>
                                <li> Designing of the different types of cat characters the player can unlock and play as.</li>
                            </ul>`,
            highlights: `
                        <ul>
                            <li>
                                <strong>Procedural Difficulty Scaling:</strong> Developed a level manager that loads platform patterns randomly from a difficulty weighted pool, 
                                    making the game harder as the player climbs higher.
                            </li>
                            <li>
                                <strong>Code-Free Level Design:</strong> Developed a system such that making new platform patterns only requires adding Godot Resource Files and 
                                    inserting the type of platform and the behaviour of each platform in the pattern.
                            </li>
                            <li>
                                <strong>Code-Free Character Design:</strong> Developed a system such that making new cat characters only requires adding Godot Resource Files and 
                                    filling up the character stats, like how high the cat can jump,  and the passive and active abilities the cat has.
                            </li>
                            <li>
                                <strong>Extendable Skill System:</strong> Developed the skill system flow such that each skill is a Godot Resource File of Subclasses of the original SkillEffect class. 
                                    Create a new skill by simply creating a new subclass and coding its effect. Then create the resource file to plug into skill slots in the game.
                            </li>
                            <li>
                                <strong>AI-Free Development:</strong> Developed the entire project through learning from past experiences, tutorial videos and reading the Godot Documentation.
                            </li>
                        </ul>`,
            gallery: [
                {type: "video", src: "https://www.youtube.com/embed/tgbNymZ7vqY"},
                {type: "video", src: "https://www.youtube.com/embed/tgbNymZ7vqY"},
                {type: "image", src: "/assets/catToTheTop_thumbnail.png"},
                {type: "image", src: "/assets/catToTheTop_thumbnail.png"},
                {type: "image", src: "/assets/vapeInvader_thumbnail.png"},
                {type: "image", src: "/assets/catToTheTop_thumbnail.png"},
            ]
        },
        vapeInvaders: {
            id: "vapeInvaders",
            name: "Vape Invaders (2026)",
            summary: `A tower defense game about defending your lungs from the harmful effects of vaping.
                        Summon your blood cells and fight against the harmful invaders! A personal project made by me and other students.`,
            thumbnail: "/assets/vapeInvader_thumbnail.png",
            banner: "/assets/vapeInvader_thumbnail.png",
            contributions: `Although this is technically a school project for a module, We decided to make a serious game as our product.
                        <Br>My contributions to the game were:
                        <ul>
                            <li>Compiling all the story points, assets and integrating them into the game.</li>
                            <li>Implementing the ally and enemy units attack/movement behaviours.</li>
                            <li>Implementing the different Levels and the difficulty curve.</li>
                            <li>Implementing the Cutscene System.</li>
                        </ul>`,
            highlights: `
                        <ul>
                            <li>
                                <strong>CSV to Cutscene Json Program:</strong> Developed a python script that reads cutscene data from csv and generate the json files to be used by the cutscene manager.
                                 Json file contains the information on who is in a scene, speaker and the dialogue text. Made the process of developing the cutscene significantly easier.
                            </li>
                            <li>
                                <strong>Composition-Style Development:</strong> Developed the project using Composition instead of Inheritance. 
                                Units are made up of different components like health and targeting components. 
                                The State Machine is also designed with composition, plug in the different states to form the behavior of the unit using signals.
                            </li>
                        </ul>`,
            gallery: [],
        },
        fireGame:{
            id: "fireGame",
            name: "Fire Safety Training (2025)",
            summary: `A point and click game that test your decision making skills in various fire emergency scenarios. Informs you on the Dos and Don'ts for when you are in a fire emergency!
                        A personal project made by me and other students.`,
            thumbnail: "",
            banner: "",
            contributions: `Although this is technically a school project for a module, We decided to make an educational game as our product.
                            <Br>My contributions to the game were:
                            <ul>
                                <li>Converting the scenarios and the sequence of actions the player can perform, with the correct and wrong steps, from a writing idea to a playable scenario.</li>
                                <li>Compiling all the scenarios and assets, integrating them into the game.</li>
                                <li>Implementing the different scenarios into levels playable in the game.</li>
                            </ul>`,
            highlights: `<ul>
                            <li>
                                <strong>Code-Free Scenario Design:</strong> Developed such that creating a new scenario only requires insertion of the interactable objects in a given scenario,
                                    the position of the interactable objects as well as the correct actions to perform to clear the scenario.
                            </li>
                            <li>
                                <strong>Flexible Scenario Design:</strong> Developed such that scenarios can set to requires player to perform a sequence of correct steps in order or in any given order. Clearing a scenario
                                    can lead to loading another scenario for a more complex scenario level experience.
                            </li>
                            <li>
                                <strong>Reusable Interactable Objects:</strong> Developed such that the same interactable object can be used in different scenarios as a correct action or wrong action,
                                    with its own explanation why the action is correct or wrong in that scenario context.
                            </li>
                        </ul>`,
            gallery: [],
        },
    },
    schoolProject: {
        gameHub: {
            id:"gameHub",
            name:"Game Information Database System (2025)",
            summary: `A database project that display information of video games through SQL and NoSQL databases. 
                    Database consists of datasets across different game platform such as the game sales and game reviews while the website enables the user to perform CRUD operations to the database`,
            thumbnail: "",
            banner: "",
            contributions: `My responsibilities for this project were:
                            <ul>
                                <li>Cleaning up the dataset to ensure no duplicate entries</li>
                                <li>Upload CSV to SQL Database feature</li>
                                <li>Implementing the Achievements page, including CREATE, READ, UPDATE and DELETE of achievements</li>
                            </ul>`,
            highlights: `
                        <ul>
                            <li>
                                <strong>User Privillege Permissions:</strong> Only admin accounts are able to perform CRUD in the website. The rest of the accounts can only perform READ operations
                            </li>
                            <li>
                                <strong>Relational Database:</strong> Main Tables such as Games, Languages, Companies are connected via join tables between each other.
                                <Br>Eg. A company can be in a game developer relationship with a game while a game publisher to another game. 
                            </li>
                        </ul>`,
            gallery: [],
        },
        learningHub:{
            id:"learningHub",
            name:"Learning Hub (2025)",
            summary: `A cloud storage project that aims to centralize a learning platform for students and teachers. Project uses microservices to store documents and host the website.`,
            thumbnail: "",
            banner: "",
            contributions: `My responsibilities for this project were:
                            <ul>
                                <li>Designing the System Architecture of the project</li>
                                <li>Whiteboard Canvas Services using Fabric.js</li>
                            </ul>`,
            highlights: `
                        <ul>
                            <li>
                                <strong>Real-time Whiteboard Collaboration:</strong> Multiple users can access the same whiteboard canvases across different whiteboard canvas.
                                    Whiteboard Server checks the connection request and assign the client to the correct whiteboard room. 
                                    Server updates all users in the same room any new strokes being made in real-time.
                            </li>
                            <li>
                                <strong>Containerized Servers:</strong> Backend, Flashcard and Whiteboard servers are containerized, 
                                    making them able to easily deployed in a container management systems like Kubernetes, to scale the server load respectively.
                            </li>
                            <li>
                                <strong>Whiteboard Canvas Saved State:</strong> Whiteboard strokes are stored in Firestore DB under its document id. 
                                    Upon entering the canvas, previous strokes get loaded in making the user able to see previous drawings.
                            </li>
                        </ul>`,
            gallery:[],
        },
        morphLearn:{
            id:"morphLearn",
            name:"MorphLearn (2026)",
            summary: `An android application app developed with Kotlin language and Jetpack Compose in Android Studio. 
                    The project aims to enhance student learning by integrating AI to summarize notes and generate questions to quiz to test the student.
                    The user can upload a PDF file which  gets sent to Gemini and returns a json response containing generated notes and generated quiz questions based on the pdf uploaded.`,
            thumbnail: "",
            banner: "",
            contributions: `My responsibilities for this project were:
                            <ul>
                                <li>Designing the System Architecture of the project.</li>
                                <li>Uploading PDF files to Gemini API</li>
                                <li>Regeneration of Quiz for reattempts</li>
                                <li>Prompting the Gemini API to respond in the correct json format</li>
                            </ul>`,
            highlights: `<ul>
                            <li>
                                <strong>Implemented a Continuous Integration Workflow:</strong> Project repository has been set up such that Github Action will automatically builds and run the unit tests to determine
                                    any new push to the branch caused the build or features to be broken
                            </li>
                            <li>
                                <strong>Validation Checks before saving response to the Database:</strong> Set up so that when getting the AI JSON response, 
                                    the system will check for validity of the json response before saving the response to Firestore DB, else the json response gets thrown away with an retry response to the user.
                            </li>
                            <li>
                                <strong>Improved Quiz Questions:</strong> When re-generating a quiz, the system will also gather the previous result recorded in the database and append it with the prompt for re-generation
                                so that the questions can be tailored to focus on the user's weaknesses.
                            </li>
                        </ul>`,
            gallery: [],
        },
        sqaPipeline:{
            id:"sqaPipeline",
            name:"DevSecOps Pipeline Configuration (2026)",
            summary: `A software quality assurance project in collaboration with WizVision. 
                    The aim of the project is to provide the user a intelligent pipeline configuration website that can cater to the user's need in their app development.`,
            contributions: `My responsibilities for this project were:
                            <ul>
                                <li>Implementing an AI Chatbox that serves as the User's Pipeline Configuration Assistant</li>
                                <li>Developing with other developers a baseline pipeline in GitLab that auto runs jobs based on the configuration files of each stages of the pipeline</li>
                            </ul>`,
            highlights: `<ul>
                            <li>
                                <strong>AI reads Configuration Files:</strong> The system will read the main configuration file and search through all referenced configuration files to append the content together with the user's message to the AI API request
                            </li>
                            <li>
                                <strong>AI Copy Paste Response:</strong> The AI will provide improved versions for each .yml files provided in a simple copy and paste manner while having the explantion and further suggestion at the end of the response
                            </li>
                        </ul>`,
            gallery: [],
        },
    }
};

const mainInfo = {
    name: "Muhammad Adli Bin Jumahat",
    title: "Aspiring Game Developer",
    description: "I am currently an SIT student, passionate about making games. ",
    email: "mdadlij@gmail.com",

    skills:`
            <ul>
                <li>Programming</li>
                    <ul>
                        <li> C#
                        <li> Java
                        <li> Phython
                        <li> Kotlin
                    </ul>
            </ul>`,

    mainProject:{
        mainProject1: projectInfo.personalProject.catToTheTop,
        mainProject2: projectInfo.personalProject.vapeInvaders,
        mainProject3: projectInfo.schoolProject.morphLearn,
    },

    links: {
        github:"https://github.com/adliiiiiiiiiiiiiiiiiiiiSIT",
        linkedin:"https://www.linkedin.com/in/adli-jumahat-217511113/",
    }
};

const educationInfo = {
    university: {
        name: "Singapore Institute of Technology (SIT)",
        course: "Computing Science with University of Glasgow",
        year: "2024 to Present",
        details: `
                    <ul>
                        <li>Develop software with various IOT devices and sensors</li>
                        <li>Develop software with various languages (C, C#, Java, Python, Kotlin)</li>
                        <li>Integrate software with Database, applying CRUD applications on SQL and NoSQL DB</li>
                        <li>Integrate software with Backend Server, handling routes and API requests</li>
                        <li>Learn about Data Structure, Algorithm and Code Optimisation</li>
                        <li>Learn about Coding best practices and Code Refactoring</li>
                        <li>Experience working in CI/CD pipeline</li>
                        <li>Experience working in AGILE framework</li>
                    </ul>`,
    },
    polytechnic: {
        name: "Temasek Polytechnic",
        course: "Game Design and Development",
        year: "2015 to 2018",
        details: `
                    <ul>
                        <li>Graduated with Diploma in Game Design & Development</li>
                        <li>Specialized in programming track of the course</li>
                        <li>Design and developed serious games on Unity Software</li>
                        <li>Texture and animated 3D models on Autodesk Maya Software</li>
                        <li>Developed an AR application for Hololens for Advanced Remanufacturing and Technological Centre (ARTC) for Major Project</li>
                    </ul>`,
    },
    secondarySchool: {
        name: "Greenview Secondary School",
        year: "2011 to 2014",
        details: `
                    <ul>
                        <li>Graduated with GCE Ordinary Level Certificate</li>   
                        <li>Participated and contributed as Section Leader in Symphonic Band</li>   
                    </ul>`,
    },
}

const workInfo = {
    xiiBraves: {
        name: "XII Braves",
        role: "Quality Assurance Tester",
        details: `Worked as a quality assurance tester, experienced in development phase as well as dev-ops phase:
                    <ul>
                        <li>Create test plans for various new features per sprints</li>
                        <li>Test new features and report for bugs found</li>
                        <li>Follow up on bugs found to see if issue has been fixed and thorough checks if other bugs was created as a byproduct</li>
                        <li>Bring up concerns to the Game Designers and Game Developers for extreme edge cases beyond the test plans</li>
                        <li>Create event document checklist to check upcoming events to come, checking if everything is in order prior to release</li>
                        <li>Create maintance document checklist to check against during the maintaince period to see if everything is in order prior to end of maintanence</li>
                    </ul>
                    Worked with the story team to help the company create game cutscenes:
                    <ul>
                        <li>Manage a team of 2 to create cutscenes within the assigned deadline</li>
                        <li>Communicate with different departments to deliver quality cutscenes</li>
                        <li>Juggle with QA work to deliver both responsibilities without compromise</li>
                    </ul>
                    Other tasks of note:
                    <ul>
                        <li>Utilize my background knowledge in programming to developed a tool that helps check through cutscenes for incorrect data</li>
                        <li>Experienced creating Game Design Documents to pitch during game protyping phase</li>
                    </ul>`,
        year: "2021 to 2023"
    },
    ncs: {
        name:"NCS Pte Ltd",
        role: "Software Engineer",
        details: `Work as a software engineer, experienced in development and documentations:
                    <ul>
                        <li>Create new features to existing systems</li>
                        <li>Create test cases for unit testing</li>
                        <li>Experience in developing with different enviorments: Eg. DEV, UAT, PROD environments</li>
                        <li>Create step by step guide and documentation for using and deploying features</li>
                    </ul>`,
        year: "2020 to 2021"
    },
    sideFX: {
        name: "SideFX Studios",
        role: "Student Internship",
        details: `Worked under SideFX Studios for Temasek Poly Internship Program:
                    <ul>
                        <li>Design multiple procedural 3D assets on Houdini software for company projects</li>
                        <li>Develop 3D games on Unity software for company projects</li>
                    </ul>`,
        year: "2017 to 2018"
    }
}
