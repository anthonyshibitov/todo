export default class List {
    #title;
    #events = [];

    constructor(title) {
        this.#title = title;
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

    addEvent(event) {
        this.#events.push(event);
        //event.addToList(this);
    }

    getEvents() {
        return this.#events;
    }

    printMe() {
        console.log(this.#title);
        this.#events.forEach((e) => {
            e.printMe();
        });
    }
}