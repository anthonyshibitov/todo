export default class Event {
    static eventCount = 0;
    #title;
    #description;
    #dueDate;
    #priority;
    #completed;
    #parentList;
    #id;

    constructor(title, desc, dueDate, priority, completed) {
        this.#title = title;
        this.#description = desc;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#completed = completed;
        this.#id = Event.eventCount;
        this.#parentList = -1; // If event has no parent, ID is -1
        Event.eventCount++;
    }

    getID() {
        return this.#id;
    }

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

    setCompletedStatus(completed){
        this.#completed = completed;
    }

    // ! Unsure if this will actually be used, but just in case. Also it looks cool.
    addToList(list){
        list.addEvent(this);
    }

    setParent(id) {
        this.#parentList = id;
    }

    getParent() {
        return this.#parentList;
    }

    printMe() {
        console.log(this.#title, ":", this.#description);
    }
}
