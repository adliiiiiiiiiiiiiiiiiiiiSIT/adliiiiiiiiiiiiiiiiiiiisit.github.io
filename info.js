// TO ADD: Project gameplay video support, Project Banner Image (Landscape), Image/Video gallery
const projectInfo = {
    personalProject: {
        catToTheTop: {
            id: "catToTheTop",
            name: "Cat To The Top",
            summary: `A casual mobile game where you jump as high as you can within the time limit.
                        Simply tap the screen to jump!`,
            thumbnail: "/assets/catToTheTop_thumbnail.png",
            banner: "/assets/catToTheTop_thumbnail.png",
            contributions:`[insert contribution on what i did on this project]`,
            highlights: `
                        <ul>
                            <li>Did A</li>
                            <li>Did B</li>
                            <li>Did C</li>
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
            name: "Vape Invaders",
            summary: `A tower defense game about defending your lungs from the harmful effects of vaping.
                        Summon your blood cells and fight against the harmful invaders!`,
            thumbnail: "/assets/vapeInvader_thumbnail.png"
        },
    },
    schoolProject: {

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
        mainProject3: projectInfo.personalProject.vapeInvaders,
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
                        <li>Utilize my background knowledge in programming to develop a tool that helps check through cutscenes for incorrect data</li>
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
