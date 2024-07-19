export default function renderDefault() {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    let h1 = document.createElement("h1")
    h1.innerText = 'No items yet';
    let content = document.querySelector(".content");
    projectCard.appendChild(h1);
    let p = document.createElement("p")
    p.innerText = 'Click below to add a new project...'
    projectCard.appendChild(p);
    content.appendChild(projectCard);
}