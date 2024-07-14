import './style.css';
console.log("Hello World!");

class Note {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

class Project {
    constructor(name, notes) {
        this.name = name;
        this.notes = notes;
    }
}



const initPage = () => {
    

}

const initData = () => {
    let note = new Note("1", "2", "3", "4");
    let project = new Project('Default Project');
    console.log(project);
    initPage();

}


initData();