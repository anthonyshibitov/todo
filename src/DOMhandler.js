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
        this.drawListEvents(this.lists[0]);
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

            eventTitleEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            eventDescEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            eventDueDateEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

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
                this.save();
                //this.drawListEvents(this.lists[0]);
                this.drawListEvents(this.lists.find(list => list.getID() == eventParentList));
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
        });
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
            liElement.addEventListener('click', () => {
                const table = window.document.getElementById('list-table');
                table.dataset.list = list.getID();
                this.drawListEvents(list);
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
        const listTable = window.document.getElementById('list-table');
        listTable.innerHTML = '';
        const events = list.getEvents();
        events.forEach(event => {
            const tableRow = window.document.createElement('tr');
            tableRow.dataset.eventID = event.getID();

            const eventTitleTD = window.document.createElement('td');
            eventTitleTD.innerHTML = event.getTitle();
            const eventDueDateTD = window.document.createElement('td');
            eventDueDateTD.innerHTML = event.getDueDate();
            const eventPriorityTD = window.document.createElement('td');
            eventPriorityTD.innerHTML = event.getPriority();
            const eventCompletedTD = window.document.createElement('td');
            eventCompletedTD.innerHTML = event.getCompletedStatus();
            
            tableRow.appendChild(eventTitleTD);
            tableRow.appendChild(eventDueDateTD);
            tableRow.appendChild(eventPriorityTD);
            tableRow.appendChild(eventCompletedTD);

            listTable.appendChild(tableRow);
        });
    }

    save(){
        const storage = new Storage();
        storage.writeList(this.lists);
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