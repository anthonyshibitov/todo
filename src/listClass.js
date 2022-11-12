export default class List {
    static listCount = 0;
    #title;
    #id;
    #events = [];

    constructor(title) {
        this.#title = title;
        this.#id = List.listCount;
        List.listCount++;
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

    getID() {
        return this.#id;
    }

    addEvent(event) {
        this.#events.push(event);
        event.setParent(this.#id);
    }

    getEvents() {
        return this.#events;
    }

    printMe() {
        console.log('list:', this.#title, '\nid:', this.#id);
        this.#events.forEach((e) => {
            e.printMe();
        });
    }
}