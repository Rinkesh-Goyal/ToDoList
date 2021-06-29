
import * as todo from "./todolist.js";


export default class UI{
    

    static loadHomePage(){
        UI.initAddProjectButtons();
        UI.initAddTaskButtons();
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
          console.log(projectName);
    }

    //Task Add Event Handler
    
    static initAddTaskButtons() {
        const addTaskButton = document.getElementById('button-add-task');
        const addTaskPopupButton = document.getElementById('button-add-task-popup');
        const cancelTaskPopupButton = document.getElementById('button-cancel-task-popup');
        // const addTaskPopupInput = document.getElementById('input-add-Task-popup');

        addTaskButton.addEventListener('click', UI.openAddTaskPopup);
        addTaskPopupButton.addEventListener('click', UI.addTask);
        cancelTaskPopupButton.addEventListener('click', UI.closeAddTaskPopup);
        // addTaskPopupInput.addEventListener('keypress',UI.handleAddTaskPopupInput);
    }

    static openAddTaskPopup(){
        const addTaskPopup = document.getElementById('add-Task-popup');
        // const addTaskButton = document.getElementById('button-add-Task');
        // UI.closeAllPopups();
        addTaskPopup.classList.add('active');
        // addTaskButton.classList.add('active');
    }

    static closeAddTaskPopup() {
        const addTaskPopup = document.getElementById('add-Task-popup');
        // const addTaskButton = document.getElementById('button-add-Task');
        const addTaskPopupInput = document.getElementById('input-add-Task-popup');
    
        addTaskPopup.classList.remove('active');
        // addTaskButton.classList.remove('active');
        addTaskPopupInput.value = '';
      }
    
    static addTask(){
        const addTaskPopupInput = document.getElementById('input-add-Task-popup');
          const TaskName = addTaskPopupInput.value;
          console.log(TaskName);
    }
}