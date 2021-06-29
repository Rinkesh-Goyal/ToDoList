export default class Project{
    constructor(project_Name){
        this.project_Name=project_Name;
        this.tasks=[];
    }

    getProject(){
        return this.project_Name;
    }

    setProject(project_Name){
        this.project_Name=project_Name;
    }
    
    setTasks(tasks){
        this.tasks=tasks;
    }

    getTasks(){
        return this.tasks;
    }

    getTask(taskName){
        return this.tasks.find((task)=>{task.getTitle()===taskName});
    }

    contains(taskName){
        return this.tasks.some((task)=>{task.getTitle()===taskName});
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTask(taskName){
        const taskToDel=this.tasks.find((task)=>{task.getTitle()===taskName});
        this.tasks.splice(this.tasks.indexOf(taskToDel),1);
    }

    

}