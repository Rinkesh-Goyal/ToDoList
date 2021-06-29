
import * as todo from "./todolist.js";


export default class UI{
    

    static lodHomePage(){
        UI.initAddProjectButtons();
    }

    static initAddProjectButtons() {
        const addProjectButton = document.getElementById('btn-add-project');
        const addProjectPopupButton = document.getElementById('button-add-project-popup');
        const cancelProjectPopupButton = document.getElementById('button-cancel-project-popup');
        const addProjectPopupInput = document.getElementById('input-add-project-popup');

        addProjectButton.addEventListener('click', UI.openAddProjectPopup);
        addProjectPopupButton.addEventListener('click', UI.addProject);
        cancelProjectPopupButton.addEventListener('click', UI.closeAddProjectPopup);
        addProjectPopupInput.addEventListener('keypress',UI.handleAddProjectPopupInput);
    }

    static openAddProjectPopup(){
        const addProjectPopup = document.getElementById('add-project-popup');
        const addProjectButton = document.getElementById('btn-add-project');
        // UI.closeAllPopups();
        addProjectPopup.classList.add('active');
        addProjectButton.classList.add('active');
    }
}