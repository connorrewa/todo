import renderDefault from "./renderDefault";
import calculateTimeUntilDue from "./calcualteTimeUntilDue";
export default function renderDOM(projectList) {
    if (projectList.length == 0) {
        renderDefault();
        return;
    }
    let contentDiv = document.querySelector(".content");
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    let noteCard = document.createElement("div");
    contentDiv.innerText = '';
    let projects = projectList.getProjects();
    projects.forEach(project => {
        let projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        let h1 = document.createElement("h1");
        h1.innerText = project.getName();
        projectCard.appendChild(h1);
        const h2 = document.createElement("h2");
        h2.innerText = calculateTimeUntilDue(project.getDate());
        projectCard.appendChild(h2);
        contentDiv.appendChild(projectCard);
    });
}