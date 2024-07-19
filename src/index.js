import './style.css';
import renderDOM from './renderDOM';

class Note {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isDone = false;
    }
}

class Project {
    constructor(name, date, notes) {
        this.name = name;
        this.date = date;
        this.notes = notes;
    }

    addNote(note) {
        this.notes.push(note);
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.date;
    }
}

class ProjectList {
    constructor () {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);

    }

    getProjects() {
        return this.projects;
    }
}



const initData = () => {
    let projectList = new ProjectList();
    return projectList
}



let projectList = initData();
renderDOM(projectList.getProjects());

const createProjectBtn = document.querySelector("#new-project");
createProjectBtn.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
    let input = document.querySelector("#name");
    input.focus();
    input.select(); 
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.querySelector("#projectForm").addEventListener('submit', function (e) {
    e.preventDefault(); //to prevent form submission
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
});

document.querySelector("#cancel-modal").addEventListener('click', function (e) {
    e.preventDefault(); //to prevent form submission
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
});

document.querySelector("#submit-modal").addEventListener('click', function (e) {
    e.preventDefault();
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
    let formEl = document.forms.projectForm;
    let formData = new FormData(formEl);
    let name = formData.get('name');
    let date = formData.get('date');
    let newProject = new Project(name, date);
    projectList.addProject(newProject);
    renderDOM(projectList);
})
