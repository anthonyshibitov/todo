export default class Event {
    #title;
    #description;
    #dueDate;
    #priority;
    #completed;
    #parentList;

    getTitle() {
        return this.#title;
    }

    setTitle(title) {
        if(title == ''){
            return false;
        } else {
            this.#title = title;
        }
    }

    getDescription() {
        return this.#description;
    }

    setDescription(description) {
        if(description == ''){
            return false;
        } else {
            this.#description = description;
        }
    }

    getDueDate() {
        return this.#dueDate;
    }

    setDueDate(dueDate) {
        if(dueDate == ''){
            return false;
        } else {
            this.#dueDate = dueDate;
        }
    }

    getPriority() {
        return this.#priority;
    }

    setPriority(priority) {
        this.#priority = priority;
    }

    getCompletedStatus() {
        return this.#completed;
    }

    setCompleted(completed){
        this.#completed = completed;
    }

    // ! Unsure if this will actually be used, but just in case. Also it looks cool.
    addToList(list){
        list.addEvent(this);
    }

    getParent() {
        return this.#parentList;
    }

    constructor(title, desc, dueDate, priority, completed) {
        this.#title = title;
        this.#description = desc;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#completed = completed;
    }

    printMe() {
        console.log(this.#title, ":", this.#description);
    }
}