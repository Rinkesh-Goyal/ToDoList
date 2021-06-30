export default class Task{
    constructor(title,desc,dueDate,priority){
        this.title=title;
        this.desc=desc;
        
        this.dueDate=dueDate;
        this.priority=priority;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title=title;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        this.dueDate=dueDate;
    }

    getDesc(){
        return this.desc;
    }

    setDesc(desc){
        this.desc=desc;
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priority){
        this.priority=priority;
    }
}