import Event from './eventClass.js';
import List from './listClass.js';
import Storage from './storageHandler.js';

export default class DOMHandler {

    lists = [];
    
    constructor() {
        const storage = new Storage();
        this.lists = storage.getList();

        // const defaultList = new List('default');
        // const testList1 = new List('test list 1');
        // this.lists.push(defaultList);
        // this.lists.push(testList1);
        
        this.attachListeners();
        this.redrawLists();
    }

    attachListeners() {
        const newTaskBtn = window.document.getElementById('new-task-btn');
        newTaskBtn.addEventListener('click', () => {
            console.log('newTaskBtn');;
        });

        const homeLists = window.document.getElementById('home-lists');
        const homeListsLabel = homeLists.firstElementChild;
        homeListsLabel.addEventListener('click', () => {
            homeLists.classList.toggle('active');
        });

        const userLists = window.document.getElementById('user-lists');
        const userListsLabel = userLists.firstElementChild;
        userListsLabel.addEventListener('click', () => {
            userLists.classList.toggle('active');
        })

        const formAddEvent = window.document.getElementById('form-add-event');
        formAddEvent.addEventListener('click', (e) => {
            e.preventDefault();
            const eventTitleEl = window.document.getElementById('event-title');
            const eventTitle = eventTitleEl.value;
            const eventDescEl = window.document.getElementById('event-desc');
            const eventDesc = eventDescEl.value;
            const eventDueDateEl = window.document.getElementById('due-date');
            const eventDueDate = eventDueDateEl.value;
            const eventPriorityEl = window.document.getElementById('event-priority');
            const eventPriority = eventPriorityEl.value;
            const eventParentListEl = window.document.getElementById('event-list-parent');
            const eventParentList = parseInt(eventParentListEl.value);

            // Close modal now

            const form = window.document.getElementById('new-event-form');
            const valid = form.checkValidity();
            if(valid){
                console.log(eventTitle, eventDesc, eventDueDate, eventPriority, eventParentList);
                this.closeModal(formAddEvent.closest('.modal'), window.document.getElementById('overlay'));

                const newEvent = new Event(eventTitle, eventDesc, eventDueDate, eventPriority, false);
                
                let listToAddTo = this.lists.find(list => {
                    return list.getID() == eventParentList;
                });

                listToAddTo.addEvent(newEvent);
                listToAddTo.printMe();

                eventTitleEl.classList.remove('invalid');
                eventDescEl.classList.remove('invalid');
                eventDueDateEl.classList.remove('invalid');
            } else {
                console.log('invalid!');
                if(eventTitle == ''){
                    eventTitleEl.classList.add('invalid');
                } else {
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDesc == ''){
                    eventDescEl.classList.add('invalid');
                } else {
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDate == ''){
                    eventDueDateEl.classList.add('invalid');
                } else {
                    eventDueDateEl.classList.remove('invalid');
                }
            }
        });

        const openNewEventButtons = window.document.querySelectorAll('[data-modal-target]');
        const closeNewEventButtons = window.document.querySelectorAll('[data-close-button]');
        const overlay = window.document.getElementById('overlay');

        overlay.addEventListener('click', () => {
            const modals = window.document.querySelectorAll('.modal.active');
            modals.forEach(modal => {
                this.closeModal(modal, overlay);
            });
        });

        openNewEventButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = window.document.querySelector(button.dataset.modalTarget);
                this.openModal(modal, overlay);
            });
        });

        closeNewEventButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                this.closeModal(modal, overlay);
            })
        })
    }

    redrawLists() {
        const listListElement = window.document.getElementById('list-container');
        const listParentElement = window.document.getElementById('event-list-parent');

        this.lists.forEach(list => {
            let liElement = document.createElement('li');
            liElement.innerHTML = "&#10095; " + list.getTitle();
            liElement.classList.add('clickable-list');
            liElement.addEventListener('click', () => {
                console.log('clicked', list.getTitle());
            });
            listListElement.appendChild(liElement);

            let optionElement = document.createElement('option');
            optionElement.value = list.getID();
            optionElement.innerText = list.getTitle();
            listParentElement.appendChild(optionElement);
        });

        const addListButton = document.createElement('li');
        addListButton.innerHTML = "<i>add new list</i>";
        addListButton.id = 'new-list-button';
        addListButton.addEventListener('click', () => {
            console.log('clicked add list button!');
        });
        listListElement.appendChild(addListButton);
    }

    drawListEvents(list) {

    }

    openModal(modal, overlay) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    closeModal(modal, overlay) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    updateParentList(lists) {

    }
}