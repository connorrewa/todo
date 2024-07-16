import './style.css';
console.log("Hello World!");

class Note {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }

}

class Project {
    constructor(name, notes) {
        this.name = name;
        this.notes = notes;
    }

    addNote(note) {
        this.notes.push(note);
    }
}



const initDOM = (projectList) => {
    console.log(projectList);
    let contentDiv = document.querySelector(".content");
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    let noteCard = document.createElement("div");


}

const initData = () => {
    let note = new Note("1", "2", "3", "4");
    let projectList = new Project('Default Project', [note]);
    projectList.addNote(new Note("5", "6", "7", "8"));
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
    let newProject = new Project("11", "22", "33", "44");
    // add to api
    // refresh data

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

    form.id = 'modal-form'
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