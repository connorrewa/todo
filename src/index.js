import './style.css';
import calculateTimeUntilDue from './calcualteTimeUntilDue';

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



const initDOM = (projectList) => {
    console.log(projectList);
    let contentDiv = document.querySelector(".content");
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    let noteCard = document.createElement("div");
    contentDiv.innerText = '';
    projectList.forEach(project => {
        let projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        let h1 = document.createElement("h1");
        h1.innerText = project.getName();
        projectCard.appendChild(h1);
        const h2 = document.createElement("h2");
        h2.innerText = "Project due in " +
            calculateTimeUntilDue(project.getDate())
                + " days";
        projectCard.appendChild(h2);
        contentDiv.appendChild(projectCard);
    });

}

const initData = () => {
    let note = new Note("1", "2", "3");
    let projectList = [];
    let newProject = new Project('Default Project', "10-10-2024", [note])
    newProject.addNote(new Note("5", "6"));
    projectList.push(newProject);
    console.log(projectList);

    return projectList

}



let projectList = initData();
initDOM(projectList);

const createProjectBtn = document.querySelector("#new-project");
createProjectBtn.addEventListener("click", () => {
    console.log("new");
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
    let newProject = new Project("First Project", "17-10-2024", []);
    projectList.push(newProject);
    // add to api
    // refresh data
    console.log(projectList)
    initDOM(projectList);

});

window.onclick = function (event) {
    if (event.target == modal) {
        console.log(modal);
        modal.style.display = "none";
    }
};

document.querySelector("#modal-form").addEventListener('submit', function (e) {
    e.preventDefault(); //to prevent form submission
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
    alert('submit');
});

document.querySelector("#cancel-modal").addEventListener('click', function (e) {
    e.preventDefault(); //to prevent form submission
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
    alert('cancel');
});

const insertAddItemButton = (project) => {
    project.addEventListener('click', function (e) {
        const itemModal = document.createElement('div');
        const innerModal = document.createElement('div');
        innerModal.innerHTML = '<h1>new note</h1>';
    
        const form = document.createElement('form');
        const titleLabel = document.createElement('label');
        const titleInput = document.createElement('input');
        const descriptionLabel = document.createElement('label');
        const descriptionInput = document.createElement('input');
        const submitButton = document.createElement('input');
        const cancelButton = document.createElement('input');
    
        form.id = 'modalForm'
        titleLabel.setAttribute("for", "title");
        titleLabel.innerText = 'title';
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
    
        descriptionLabel.setAttribute("for", "description");
        descriptionLabel.innerText = 'description';
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("name", "description");
    
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "submit");
        cancelButton.setAttribute("type", "button");
        cancelButton.setAttribute("value", "cancel");
    
        cancelButton.addEventListener('click', function (e) {
            itemModal.remove();
        })
    
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();
            //submit form
            let formEl = document.forms.modalForm;
            let formData = new FormData(formEl);
            let title = formData.get('title');
            let description = formData.get('description');
            console.log(title, description);
            let newNote = new Note(title, description);
            project.addNote(newNote);
            initDOM(projectList);
    
    
    
        });
    
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(descriptionLabel);
        form.appendChild(descriptionInput);
        const buttons = document.createElement('div');
        buttons.classList.add("buttons");
    
        buttons.appendChild(submitButton);
        buttons.appendChild(cancelButton);
        form.appendChild(buttons);
        innerModal.appendChild(form);
    
        itemModal.classList.add('item-modal');
        innerModal.classList.add('item-modal-inner');
        itemModal.appendChild(innerModal);
        document.body.appendChild(itemModal);
    });
}
document.querySelector(".add-todo").addEventListener('click', function (e) {
    const itemModal = document.createElement('div');
    const innerModal = document.createElement('div');
    innerModal.innerHTML = '<h1>new note</h1>';

    const form = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('input');
    const submitButton = document.createElement('input');
    const cancelButton = document.createElement('input');

    form.id = 'modalForm'
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = 'title';
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");

    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerText = 'description';
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");

    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "submit");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "cancel");

    cancelButton.addEventListener('click', function (e) {
        itemModal.remove();
    })

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        //submit form
        let formEl = document.forms.modalForm;
        let formData = new FormData(formEl);
        let title = formData.get('title');
        let description = formData.get('description');
        console.log(title, description);
        let newNote = new Note(title, description)



    });

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    const buttons = document.createElement('div');
    buttons.classList.add("buttons");

    buttons.appendChild(submitButton);
    buttons.appendChild(cancelButton);
    form.appendChild(buttons);
    innerModal.appendChild(form);

    itemModal.classList.add('item-modal');
    innerModal.classList.add('item-modal-inner');
    itemModal.appendChild(innerModal);
    document.body.appendChild(itemModal);
});