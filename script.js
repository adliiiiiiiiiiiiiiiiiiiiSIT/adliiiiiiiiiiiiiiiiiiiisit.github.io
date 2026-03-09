const HeaderInfo = {
    setHeaderInfo() {
        document.getElementById("name").textContent = mainInfo.name;
        document.getElementById("title").textContent = mainInfo.title;
    }
};

const Navigation = {
    loadNavBar() {
        fetch("/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
        })
    }
};

const MainPage = {
    setMainInfo(){
        document.getElementById("description").textContent = mainInfo.description;
        document.getElementById("skills").innerHTML = mainInfo.skills;
        document.getElementById("email").textContent = "Email: " + mainInfo.email;
    
        // Links
        document.getElementById("link-github").href = mainInfo.links.github;
        document.getElementById("link-linkedin").href = mainInfo.links.linkedin;
    },

    setProjectList(){
        const projectList = document.getElementById("main-project-list");
        projectList.innerHTML = ""

        Object.values(mainInfo.mainProject).forEach(project => {
            const card = document.createElement("div");
            card.className = "project-list";

            card.innerHTML = `
            <div class="project-list-thumbnail">
                <img src="${project.thumbnail}">
            </div>

            <div class="project-list-top">
                <h3>${project.name}</h3>
            </div>

            <div class="project-list-bottom">
                <p>${project.summary}</p>
                <a href= "/projects/detail.html?project=${project.id}">View Project</a>
            </div>
            `;
            
            projectList.appendChild(card);
        })
    }
};

const EducationPage = {
    setEducationList(){
        const educationList = document.getElementById("education-list");
        educationList.id = ""

        Object.values(educationInfo).forEach(education => {
            const card = document.createElement("div");
            card.className = "education-list";

            card.innerHTML = `
            <section>
                <h2>${education.name} (${education.year})</h2>
                <h3>${education.course??""}</h3>
                <h3>${education.details}</h3>
            </section>
            `;

            educationList.appendChild(card);
        })
    }
};

const WorkPage = {
    setWorkList(){
        const workList = document.getElementById("work-list");
        workList.innerHTML = ""

        Object.values(workInfo).forEach(work => {
            const card = document.createElement("div");
            card.className = "work-list";

            card.innerHTML = `
            <section>
            <h2>${work.name} (${work.year})</h2>
            <h2>${work.role}</h2>
            <h3>${work.details}</h3>
            </section>
            `;

            workList.appendChild(card);
        })
    }
};

const ProjectPage = {
    setProjectInfo(projectName){
        let projectData = null;

        // Check on personal project if project exist, if not, check on school project instead.
        if (projectInfo.personalProject[projectName] != null)
            projectData = projectInfo.personalProject[projectName]
        else if (projectInfo.schoolProject[projectName] != null)
            projectData = projectInfo.schoolProject[projectName]

        // If still null, data does not exist
        if (projectData == null){
            document.getElementById("project-name").textContent = "Project not found";
            return;
        }
    
        // Set text content
        document.getElementById("project-name").textContent = projectData.name;
        document.getElementById("project-summary").innerHTML = projectData.summary;
        document.getElementById("project-contributions").innerHTML = projectData.contributions;
        document.getElementById("project-highlights").innerHTML = projectData.highlights;



        // Set banner image
        const bannerImg = document.getElementById("project-banner");

        if (projectData.banner){
            bannerImg.src = projectData.banner;
            bannerImg.style.display = "block";
        } else bannerImg.style.display = "none";
        
        // Set gallery images
        const galleryList = document.getElementById("gallery-list");
        galleryList.innerHTML = "";

        if (projectData.gallery){
            projectData.gallery.forEach(item => {
                const mediaWrapper = document.createElement("div");
                mediaWrapper.className = "gallery-item";

                if (item.type === "image"){
                    mediaWrapper.innerHTML = `<img src="${item.src}">`;
                } else if (item.type === "video"){
                    mediaWrapper.innerHTML = `<iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>`;
                }
                galleryList.append(mediaWrapper);
            })
        }
        else galleryList.textContent = "No content available";
    },

    setProjectList(list, content){
        const projectList = document.getElementById(list);
        projectList.innerHTML = ""

        Object.values(content).forEach(project => {
            const card = document.createElement("div");
            card.className = "project-list";

            card.innerHTML = `
            <div class="project-list-thumbnail">
                <img src="${project.thumbnail}">
            </div>

            <div class="project-list-top">
                <h3>${project.name}</h3>
            </div>

            <div class="project-list-bottom">
                <p>${project.summary}</p>
                <a href= "/projects/detail.html?project=${project.id}">View Project</a>
            </div>
            `;
            
            projectList.appendChild(card);
        })
    }
};

