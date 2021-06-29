export default class Task{
    constructor(title,desc,dueDate,priority){
        this.desc=desc;
        this.title=title;
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