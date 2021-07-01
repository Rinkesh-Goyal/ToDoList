
import ToDoList from "./todolist.js";
import Storage from "./Storage.js";
import Project from "./project.js";
import Task from "./task.js";

export default class UI{
    

    static loadHomePage(){
        UI.initAddProjectButtons();
        UI.initAddTaskButtons();
        // UI.addProjectToDropDown();
        UI.loadProjects();

        // console.log(Storage.getTodoList().projects[0].project_Name);
        // console.log(Storage.getTodoList().projects.length);
    }

    
    //Project Add Event Handler

    static initAddProjectButtons() {
        const addProjectButton = document.getElementById('button-add-project');
        const addProjectPopupButton = document.getElementById('button-add-project-popup');
        const cancelProjectPopupButton = document.getElementById('button-cancel-project-popup');
        // const addProjectPopupInput = document.getElementById('input-add-project-popup');

        addProjectButton.addEventListener('click', UI.openAddProjectPopup);
        addProjectPopupButton.addEventListener('click', UI.addProject);
        cancelProjectPopupButton.addEventListener('click', UI.closeAddProjectPopup);
        // addProjectPopupInput.addEventListener('keypress',UI.handleAddProjectPopupInput);
    }

    static openAddProjectPopup(){
        const addProjectPopup = document.getElementById('add-project-popup');
        const addProjectButton = document.getElementById('button-add-project');
        // UI.closeAllPopups();
        addProjectPopup.classList.add('active');
        addProjectButton.classList.add('active');
    }

    static closeAddProjectPopup() {
        const addProjectPopup = document.getElementById('add-project-popup');
        const addProjectButton = document.getElementById('button-add-project');
        const addProjectPopupInput = document.getElementById('input-add-project-popup');
    
        addProjectPopup.classList.remove('active');
        addProjectButton.classList.remove('active');
        addProjectPopupInput.value = '';
      }
    
    static addProject(){
        const addProjectPopupInput = document.getElementById('input-add-project-popup');
          const projectName = addProjectPopupInput.value;
          if (projectName === '') {
            alert("Project name can't be empty");
            return;
          }
          if (Storage.getTodoList().contains(projectName)) {
            addProjectPopupInput.value = '';
            alert('Project names must be different');
            return;
          }
          Storage.addProject(new Project(projectName));
          UI.createProject(projectName);

          UI.closeAddProjectPopup();

          console.log(projectName);
    }

    static createProject(name) {
        const userProjects = document.getElementById('projects-list');
        userProjects.innerHTML += ` 
          <button class="button-project" data-project-button>
            <div class="left-project-panel">
              <i class="fas fa-tasks"></i>
              <span>${name}</span>
            </div>
            <div class="right-project-panel">
              <i class="fas fa-times"></i>
            </div>
          </button>`;
        UI.addProjectToDropDown();
        UI.initProjectButtons();
    }

    static addProjectToDropDown(){
        let length=Storage.getTodoList().projects.length;
        console.log(length);
        if (length == 0) {
            alert("Please add project.");
        }

        let project = document.querySelector(".project-drop-down");
        console.log(project);
        project.innerHTML = "";
        for (let i = 0; i < length; i++) {
            const element = Storage.getTodoList().projects[i].project_Name;
            let option = document.createElement("option");
            option.value = Storage.getTodoList().projects[i].project_Name;
            option.innerText = element;
            project.appendChild(option);
        }
    }
    
    static initProjectButtons() {
        const projectButtons = document.querySelectorAll('[data-project-button]');
        console.log(projectButtons);
        projectButtons.forEach((projectButton) =>{
            // console.log(projectButton);
          projectButton.addEventListener('click', UI.handleProjectButton)}
        );
        
    }

    

      static handleProjectButton(e) {
        const projectName = this.children[0].children[1].textContent;
        // console.log(this.children[0]);
        console.log(e);
        // console.log(e.target.classList.contains('fa-times'))
        if (e.target.classList.contains('fa-times')) {
          UI.deleteProject(projectName, this);
          return;
        }
    
        UI.openProject(projectName, this);
        
      }

      static openProject(projectName, projectButton) {
        
        const projectButtons = document.querySelectorAll('.button-project');
        const buttons = [...projectButtons];
    
        buttons.forEach((button) => button.classList.remove('active'));
        projectButton.classList.add('active');
        UI.closeAddProjectPopup();
        UI.loadProjectContent(projectName);
        // UI.initAddTaskButtons();
        // console.log(document.getElementById("add-task-popup"));
      }

      static loadProjectContent(projectName) {
        const projectPreview = document.getElementById('project-preview');
        projectPreview.innerHTML = `
            <h1 id="project-name">${projectName}</h1>
            <div class="tasks-list" id="tasks-list"></div>`;
        // console.log(projectName);
        const taskName=Storage.getTodoList().projects.filter((project)=>project.project_Name===projectName);
        // console.log(taskName[0].tasks[0].title);
        for(let i=0;i<taskName[0].tasks.length;i++){
            console.log(taskName[0].tasks[i].title);
            let name=taskName[0].tasks[i].title;
            let dueDate=taskName[0].tasks[i].dueDate;
            UI.createTask(name,dueDate);
        }

        // console.log(UI.initAddTaskButtons());

        const addTaskButton = document.getElementById("button-add-task");
        // console.log(addTaskButton);
        addTaskButton.addEventListener('click',()=>{console.log("success")});


      }
    
      static deleteProject(projectName, button) {
        // if (button.classList.contains('active')) UI.clearProjectPreview();
        Storage.deleteProject(projectName);
        UI.clearProjects();
        UI.loadProjects();
      }

      static clearProjects() {
        const projectsList = document.getElementById('projects-list');
        // console.log(projectsList);
        projectsList.textContent = '';
      }

      static loadProjects() {
        Storage.getTodoList()
          .getProjects()
          .forEach((project) => {
            if (
              project.name !== 'Inbox' &&
              project.name !== 'Today' &&
              project.name !== 'This week'
            ) {
              UI.createProject(project.project_Name);
            }
          });
    
        UI.initAddProjectButtons();
      }

    //Task Add Event Handler
    
    static initAddTaskButtons() {
        const addTaskButton = document.getElementById('button-add-task');
        const addTaskPopupButton = document.getElementById('button-add-task-popup');
        const cancelTaskPopupButton = document.getElementById('button-cancel-task-popup');
        // const addTaskPopupInput = document.getElementById('input-add-task-popup');

        addTaskButton.addEventListener('click', UI.openAddTaskPopup);
        addTaskPopupButton.addEventListener('click', UI.addTask);
        cancelTaskPopupButton.addEventListener('click', UI.closeAddTaskPopup);
        // addTaskPopupInput.addEventListener('keypress',UI.handleAddTaskPopupInput);
    }

    static openAddTaskPopup(){
        if(Storage.getTodoList().projects.length===0) {alert("Please add project first."); return;}
        const addTaskPopup = document.getElementById('add-task-popup');
        const addTaskButton = document.getElementById('button-add-task');

    // UI.closeAllPopups();
    addTaskPopup.classList.add('active');
    UI.addProjectToDropDown();
    // addTaskButton.classList.add('active');
        
    }
    

    static closeAddTaskPopup() {
        const addTaskPopup = document.getElementById('add-task-popup');
        
        const addTitlePopupInput = document.getElementById('input-add-title-popup');
        const addDatePopupInput = document.getElementById('input-add-date-popup');
        const addDescPopupInput = document.getElementById('input-add-desc-popup');
        const addPriorityPopupInput = document.getElementById('input-add-priority-popup');
        const addProjectPopupInput = document.querySelector('.project-drop-down');

        addTaskPopup.classList.remove('active');
        
        addTitlePopupInput.value = '';
        addDatePopupInput.value = '';
        addDescPopupInput.value = '';
        addPriorityPopupInput.value = '';
        addProjectPopupInput.value = '';
    }
    
    static addTask(){
    const projectName = document.querySelector('.project-drop-down').value;
    const addTaskPopupInput = document.getElementById('input-add-title-popup');
    const addDatePopupInput = document.getElementById('input-add-date-popup');
    const addDescPopupInput = document.getElementById('input-add-desc-popup');
    const addPriorityPopupInput = document.getElementById('input-add-priority-popup');
    // const addProjectPopupInput = document.querySelector('.project-drop-down');
    // console.log(addTaskPopupInput);
    const taskName = addTaskPopupInput.value;
    const taskDate = addDatePopupInput.value;
    const taskDesc = addDescPopupInput.value;
    const taskPriority = addPriorityPopupInput.options[addPriorityPopupInput.selectedIndex].text;
    

    // console.log(taskName);
    if (taskName === '') { 
      alert("Task name can't be empty");
      return;
    }
    if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
      alert('Task names must be different');
      addTaskPopupInput.value = '';
      return;
    }

    Storage.addTask(projectName, new Task(taskName,taskDesc,taskDate,taskPriority));

    
    UI.closeAddTaskPopup();
    }

    static createTask(name, dueDate) {
        const tasksList = document.getElementById('tasks-list');
        tasksList.innerHTML += `
          <button class="button-task" data-task-button>
            <div class="left-task-panel">
              <i class="far fa-circle"></i>
              <p class="task-content">${name}</p>
              
            <div class="right-task-panel">
              <p class="due-date" id="due-date">${dueDate}</p>
              <i class="fas fa-trash-alt"></i>
            </div>
          </button>`;
    
        UI.initTaskButtons();
    }


    static initTaskButtons() {
        const taskButtons = document.querySelectorAll('[data-task-button]');
        
    
        taskButtons.forEach((taskButton) =>
          taskButton.addEventListener('click', UI.handleTaskButton),
        );
    }

    static handleTaskButton(e) {
        if (e.target.classList.contains('fa-circle')) {
          UI.displayTask(this.children[0].children[1].textContent);
          return;
        }
        if (e.target.classList.contains('fa-trash-alt')) {
          UI.deleteTask(this);
          return;
        }
    }

    static displayTask(taskName) {
        // console.log(taskButton);
        const projectName = document.getElementById('project-name').textContent;
        // const taskName = taskButton.children[0].children[1].textContent;
        const tasks=Storage.getTodoList().projects.filter((project)=>project.project_Name===projectName);
        console.log(taskName);
        let name='';
        let dueDate='';
        let desc='';
        let priority='';
        for(let i=0;i<tasks[0].tasks.length;i++){
            
            if(tasks[0].tasks[i].title===taskName){
                name=tasks[0].tasks[i].title;
                dueDate=tasks[0].tasks[i].dueDate;
                desc=tasks[0].tasks[i].desc;
                priority=tasks[0].tasks[i].priority;
            }
        
        }
            
        const projectPreview=document.getElementById("project-preview");
        projectPreview.innerHTML=`
        <h1 id="project-name">${projectName}</h1>
        <div class="tasks-list task-display" id="tasks-list">
        <p>Task Name : ${name}</p>
        <p>Description : ${desc}</p>
        <p>Due Date : ${dueDate}</p>
        <p>Priority : ${priority}</p>
        </div>`;
        
    }

    static deleteTask(taskButton) {
        const projectName = document.getElementById('project-name').textContent;
        const taskName = taskButton.children[0].children[1].textContent;
        Storage.deleteTask(projectName, taskName);
    UI.clearTasks();
    UI.loadTasks(projectName);
  }

  static clearTasks() {
    const tasksList = document.getElementById('tasks-list');
    tasksList.textContent = '';
  }

  static loadTasks(projectName) {
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => UI.createTask(task.title,task.desc, task.dueDate,task.priority));

  }
 
}