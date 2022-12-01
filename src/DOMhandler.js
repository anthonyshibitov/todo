import Event from './eventClass.js';
import List from './listClass.js';
import Storage from './storageHandler.js';

export default class DOMHandler {

    lists = [];
    
    constructor() {
        const defaultList = new List('default');
        const testList1 = new List('test list 1');
        this.lists.push(defaultList);
        this.lists.push(testList1);
        
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
            const eventTitle = window.document.getElementById('event-title').value;
            const eventDesc = window.document.getElementById('event-desc').value;
            const eventDueDate = window.document.getElementById('due-date').value;
            const eventPriority = window.document.getElementById('event-priority').value;
            const eventParentList = parseInt(window.document.getElementById('event-list-parent').value);
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
            liElement.innerText = list.getTitle();
            liElement.addEventListener('click', () => {
                console.log('clicked', list.getTitle());
            });
            listListElement.appendChild(liElement);

            let optionElement = document.createElement('option');
            optionElement.value = list.getID();
            optionElement.innerText = list.getTitle();
            listParentElement.appendChild(optionElement);
        });
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