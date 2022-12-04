export default class List {
    static listCount = 0;
    title;
    id;
    events = [];

    constructor(title) {
        this.title = title;
        this.id = List.listCount;
        List.listCount++;
    }

    findEventByID(eventID) {
        const result = this.events.findIndex((event) => {
            return event.getID() == eventID;
        });
        return result;
    }

    getEventByID(eventID) {
        const index = this.findEventByID(eventID);
        if(index != -1){
            return this.events[index]
        } else {
            return 1;
        }
    }

    removeElementByID(eventID) {
        const index = this.findEventByID(eventID);
        if(index != -1){
            const result = this.events.splice(index, 1);
            if(result == []){
                return 1;
            }
        } else {
            return 1;
        }
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        if(title == ''){
            return false;
        } else {
            this.title = title;
        }
    }

    getID() {
        return this.id;
    }

    setID(id) {
        this.id = id;
    }

    addEvent(event) {
        if(event.getParent() == -1){
            this.events.push(event);
            event.setParent(this.id);
        } else {
            return 1;
        }
    }

    getEvents() {
        return this.events;
    }

    printMe() {
        console.log('list:', this.title, '\nid:', this.id);
        this.events.forEach((e) => {
            e.printMe();
        });
    }
}